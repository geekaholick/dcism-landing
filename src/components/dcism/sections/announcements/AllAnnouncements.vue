<template>
  <div class="main-container">
    <!-- Navbar section -->
    <HeaderElement />

    <!-- breadcrumb strat -->
    <Breadcrumb>
      <template slot="breadcrumb">
        <div class="breadcrumb_box text-center">
          <ul class="breadcrumb-list">
            <li class="breadcrumb-item active" style="font-size: 15px">
              Department of Computer, Information Sciences, and Mathematics
            </li>
          </ul>
          <h2 class="breadcrumb-title">Announcements</h2>
          <!-- breadcrumb-list start -->
          <ul class="breadcrumb-list">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li class="breadcrumb-item active">Announcements</li>
          </ul>
          <!-- breadcrumb-list end -->
        </div>
      </template>
    </Breadcrumb>
    <!-- breadcrumb end -->

    <!-- blog item wrapper start -->
    <div
      class="blog-pages-wrapper section-space--ptb_100 border-bottom"
      id="announcement_section"
      ref="announcement_section"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="main-blog-wrap" v-if="isLoading">
              <AnnouncementSkeleton v-for="i in 5" :key="i"/>
            </div>
            <div class="main-blog-wrap" v-else-if="totalAnnouncements == 0">
              <div class="post-info lg-blog-post-info">

                <h4 class="post-title font-weight--light text-center">
                  <router-link to="/announcements">
                    There are currently no announcements to be displayed.
                  </router-link>
                </h4>

                <div class="post-read-more mt-20">
                  <router-link to="/" class="ht-btn ht-btn-sm">
                    <span class="btn-text">Go Back </span>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="main-blog-wrap" v-else>
              <!--======= Single Blog Item Start ========-->
              <div
                v-for="announcement in announcement_list"
                :key="announcement.announcement_id"
                class="single-blog-item lg-blog-item border-bottom wow move-up"
              >
                <!-- Post Feature Start -->
                <div
                  class="post-feature blog-thumbnail"
                  style="width: 100%; height: 450px"
                  v-if="announcement.images.length > 0"
                >
                  <router-link
                    to="/announcements"
                    style="
                      width: 100%;
                      height: 100%;
                      object-fit: contain !important;
                    "
                    class="d-flex justify-content-center"
                  >
                    <img
                      class="img-fluid"
                      :src="announcement.images[0].image_path"
                      alt="Blog Images"
                      style="
                        width: 100%;
                        height: 100%;
                        object-fit: cover !important;
                      "
                    />
                  </router-link>
                </div>
                <!-- Post Feature End -->

                <!-- Post info Start -->
                <div class="post-info lg-blog-post-info">
                  <div class="post-categories">
                    <router-link to="/">{{
                      getAverageReadingTime(announcement.body)
                    }}</router-link>
                  </div>

                  <h4 class="post-title font-weight--light">
                    <router-link to="/announcements">{{
                      announcement.title
                    }}</router-link>
                  </h4>

                  <div class="post-meta mt-20">
                    <div class="post-author">
                      <router-link to="/announcements">
                        <img
                          class="img-fluid avatar-96"
                          :src="
                            announcement.user_image
                              ? announcement.user_image
                              : require('@/assets/img/team/avatar-04.png')
                          "
                          alt="image"
                        />
                        {{ announcement.first_name }}
                        {{ announcement.last_name }}
                      </router-link>
                    </div>
                    <div class="post-date">
                      <span class="far fa-calendar meta-icon"></span>
                      {{ formatDate(announcement.created_at) }}
                    </div>
                  </div>

                  <div class="post-excerpt mt-15">
                    <p>
                      {{ addEllipsis(announcement.body) }}
                    </p>
                  </div>

                  <div class="post-read-more mt-20">
                    <router-link to="/announcements" class="ht-btn ht-btn-sm">
                      <span class="btn-text">Read more </span>
                    </router-link>
                  </div>
                </div>
                <!-- Post info End -->
              </div>
              <!--===== Single Blog Item End =========-->
            </div>
          </div>

          <!--==== FOR THE SIDE ANNOUNCEMENTS ====-->
          <div class="col-lg-4">
            <SidebarAnnouncement />
          </div>
        </div>
      </div>
    </div>
    <!-- blog item wrapper end -->

    <!-- Navigation -->
    <div class="portfolio-nav-links bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="nav-list">
              <div class="nav-item prev">
                <div class="inner" v-if="data.page > 1">
                  <a rel="prev" @click="getPrevAnnouncements">
                    <div>
                      <h6>Recent announcements</h6>
                    </div>
                  </a>
                </div>
              </div>

              <div class="nav-item next">
                <div
                  class="inner scroll"
                  v-if="
                    data.page < Math.ceil(totalAnnouncements / data.perPage)
                  "
                >
                  <a rel="next" @click="getNextAnnouncements">
                    <div>
                      <h6>Older announcements</h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <button class="entry-portfolio-return-link">
              <span class="fa fa-th"></span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- footer section -->
    <Footer />

    <!-- offcanvas search component -->
    <OffcanvasSearchBox />
  </div>
</template>

<script>
/* eslint-disable */
import HeaderElement from "@/components/dcism/Header.vue";
import Breadcrumb from "@/components/dcism/Breadcrumb.vue";
import Footer from "@/components/dcism/Footer.vue";
import OffcanvasSearchBox from "@/components/dcism/OffcanvasSearchBox";
import SidebarAnnouncement from "@/components/dcism/sections/announcements/SidebarAnnouncement";
import Api from "@/api/api.js";
import AnnouncementSkeleton from "@/components/dcism/sections/announcements/AnnouncementSkeleton";

export default {
  name: "AllAnnouncements",
  components: {
    HeaderElement,
    Breadcrumb,
    Footer,
    OffcanvasSearchBox,
    SidebarAnnouncement,
    AnnouncementSkeleton,
  },
  metaInfo: {
    title: "Announcements | DCISM",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },
  data() {
    return {
      data: {
        page: 1,
        perPage: 5,
        q: "",
        sortBy: "latest",
      },
      totalAnnouncements: 0,
      announcement_list: [],
      isLoading: false,
    };
  },
  async created() {
    try {
      this.isLoading = true;
      let count = await Api().get("/get-all-announcements-count");
      this.totalAnnouncements = count.data;
      console.log(count);

      const announcements = await this.getAnnouncements(
        this.data.page,
        this.data.perPage
      );

      this.announcement_list = announcements;
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
    async getNextAnnouncements() {
      this.isLoading = true;
      window.scroll({
        top: this.$refs.announcement_section.offsetTop,
        left: 0,
        behavior: "smooth",
      });

      this.data.page++;
      let announcements = await this.getAnnouncements(
        this.data.page,
        this.data.perPage
      );
      this.announcement_list = announcements;
      this.isLoading = false;
    },
    async getPrevAnnouncements() {
      this.isLoading = true;
      window.scroll({
        top: this.$refs.announcement_section.offsetTop,
        left: 0,
        behavior: "smooth",
      });

      this.data.page--;
      let announcements = await this.getAnnouncements(
        this.data.page,
        this.data.perPage
      );
      this.announcement_list = announcements;
      this.isLoading = false;
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
    addEllipsis(text) {
      if (text.length >= 290) {
        const new_text = text.slice(0, 290);
        return `${new_text} ...`;
      }
      return text;
    },
    getAverageReadingTime(text) {
      const length = text.length;
      const avg = 200;

      let reading_time = length / avg;
      if (reading_time >= 2) {
        return `${Math.floor(reading_time)} mins read`;
      }

      if (reading_time >= 1) {
        return `${Math.floor(reading_time)} min read`;
      }

      return `less than 1 min read`;
    },
  },
};
</script>