<template>
  <div
    class="
      page-sidebar-content-wrapper page-sidebar-right
      small-mt__40
      tablet-mt__40
    "
  >
    
    <!-- === Quick Links Widget Start ===-->
    <div class="sidebar-widget widget-categories wow move-up">
      <h5 class="widget-title font-weight--light">Quick Links</h5>
      <ul>
        <li class="cat-item">
          <router-link to="/announcements"
            >News Page<span class="count">9+</span>
          </router-link>
        </li>
        <li class="cat-item">
          <router-link to="/events"
            >Events Page<span class="count">1</span>
          </router-link>
        </li>
        <li class="cat-item">
          <router-link to="/announcements">FAQs Page </router-link>
        </li>
        <li class="cat-item">
          <router-link to="/announcements">About the Department </router-link>
        </li>
      </ul>
    </div>
    <!-- === Quick Links Widget End === -->

    <!-- === Popular Announcements Widget Start === -->
    <div class="sidebar-widget widget-blog-post wow move-up">
      <h5 class="widget-title font-weight--light">Popular announcements</h5>
      <div v-if="isLoading">
        <div class="post-item" v-for="i in 2" :key="i">
          <AnnouncementSkeleton />
        </div>
      </div>
      <div v-else-if="popular_announcements.length <= 0">
          <div class="post-item">
              <div class="post-info">
                  <div class="post-categories">
                      No announcements available
                  </div>
              </div>
          </div>
      </div>
      <div
        v-else
        class="post-item"
        v-for="announcement in popular_announcements"
        :key="announcement.announcement_id"
      >
        <div class="post-info">
          <div class="post-categories">
            <router-link to="/announcements">{{
              formatDate(announcement.created_at)
            }}</router-link>
          </div>
          <h6 class="post-title">
            <router-link to="/announcements">{{
              announcement.title
            }}</router-link>
          </h6>
        </div>
      </div>
    </div>
    <!-- === Popular Announcements Widget End === -->

    <!-- === Social Widget Start === -->
    <div class="sidebar-widget widget-tag wow move-up">
      <h5 class="widget-title font-weight--light">Social</h5>
      <ul class="list ht-social-networks solid-rounded-icon">
        <li class="item d-flex justify-content-between" style="gap: 0.5rem">
          <a
            target="_blank"
            href="https://www.facebook.com/uscdcism/"
            class="social-link hint--bounce hint--top hint--primary"
            aria-label="@uscdcism"
            style="flex: 0 0 15%"
            ><i class="fab fa-facebook"></i>
          </a>
          <span style="flex: 0 0 85%"
            >Department of Computer, Information Sciences, and Mathematics</span
          >
        </li>
      </ul>
    </div>
    <!-- === Social Widget End === -->
  </div>
</template>

<script>
/* eslint-disable no-console */
import Api from "@/api/api.js";
import AnnouncementSkeleton from "@/components/dcism/sections/announcements/AnnouncementSkeleton";

export default {
  components: {
    AnnouncementSkeleton,
  },
  data() {
    return {
      popular_announcements: [],
      data: {
        page: 1,
        perPage: 5,
      },
      isLoading: false
    };
  },
  async created() {
    try {
      this.isLoading = true;

      const announcements = await this.getAnnouncements(
        this.data.page,
        this.data.perPage
      );

      this.popular_announcements = announcements;
    } catch (err) {
      console.log(err.toString());
    }

    this.isLoading = false;
  },
  methods: {
    async getAnnouncements(page, perPage) {
      try {
        let announcements = await Api().get(
          `/get-all-announcements?page=${page}&items=${perPage}`
        );
        return announcements.data;
      } catch (e) {
        console.log(e.toString());
      }
      return [];
    },
    formatDate(date) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const d = new Date(date);
      const extension = this.getDayDifference(d, new Date());

      return `${
        months[d.getMonth()]
      } ${d.getDate()}, ${d.getFullYear()} ${extension}`;
    },
    getDayDifference(prev, now) {
      // convert to UTC
      const date2_UTC = new Date(
        Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
      );
      const date1_UTC = new Date(
        Date.UTC(prev.getUTCFullYear(), prev.getUTCMonth(), prev.getUTCDate())
      );

      //--------------------------------------------------------------
      let days = date2_UTC.getDate() - date1_UTC.getDate();
      if (days < 0) {
        date2_UTC.setMonth(date2_UTC.getMonth() - 1);
        days += this.DaysInMonth(date2_UTC);
      }
      //--------------------------------------------------------------
      let months = date2_UTC.getMonth() - date1_UTC.getMonth();
      if (months < 0) {
        date2_UTC.setFullYear(date2_UTC.getFullYear() - 1);
        months += 12;
      }
      //--------------------------------------------------------------
      const years = date2_UTC.getFullYear() - date1_UTC.getFullYear();

      if (years === 1) return `(${years} year ago)`;

      if (years > 1) return `(${years} years ago)`;

      if (months === 1) return `(${months} month ago)`;

      if (months > 1) return `(${months} months ago)`;

      if (days === 1) return `(${days} day ago)`;

      if (days > 1) return `(${days} days ago)`;

      return "(today)";
    },
    DaysInMonth(date2_UTC) {
      const monthStart = new Date(
        date2_UTC.getFullYear(),
        date2_UTC.getMonth(),
        1
      );
      const monthEnd = new Date(
        date2_UTC.getFullYear(),
        date2_UTC.getMonth() + 1,
        1
      );
      const monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
      return monthLength;
    },
  },
};
</script>