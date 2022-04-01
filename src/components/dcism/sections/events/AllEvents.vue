<template>
  <div class="main-container">
    <!-- Navbar section -->
    <HeaderElement />

    <!-- breadcrumb start -->
    <Breadcrumb>
      <template slot="breadcrumb">
        <div class="breadcrumb_box text-center">
          <ul class="breadcrumb-list">
            <li class="breadcrumb-item active" style="font-size: 15px">
              Department of Computer, Information Sciences, and Mathematics
            </li>
          </ul>
          <h2 class="breadcrumb-title">Events</h2>
          <!-- breadcrumb-list start -->
          <ul class="breadcrumb-list">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li class="breadcrumb-item active">Events</li>
          </ul>
          <!-- breadcrumb-list end -->
        </div>
      </template>
    </Breadcrumb>
    <!-- breadcrumb end -->
    
    <!-- List of Events start -->
    <EventContent />
    <!-- List Of Events end -->

    <!-- footer section -->
    <Footer />

    <!-- offcanvas search component -->
    <OffcanvasSearchBox />

    <!-- off-canvas mobile menu -->
    <OffCanvasMobileMenu />
  </div>
</template>

<script>
/* eslint-disable */
import HeaderElement from "@/components/dcism/Header.vue";
import Breadcrumb from "@/components/dcism/Breadcrumb.vue";
import Footer from "@/components/dcism/Footer.vue";
import OffcanvasSearchBox from "@/components/dcism/OffcanvasSearchBox";
import OffCanvasMobileMenu from '@/components/dcism/OffCanvasMobileMenu'
import EventContent from "@/components/dcism/sections/events/EventsContent";
// import Api from "@/api/api.js";

export default {
    name: "AllEvents",
    components: {
        HeaderElement,
        Breadcrumb,
        Footer,
        OffcanvasSearchBox,
        OffCanvasMobileMenu,
        EventContent,
    },

    metaInfo: {
        title: "Events | DCISM",
        htmlAttrs: {
            lang: "en",
            amp: true,
        },
    },

    async created() {

    },

    methods: {

    },
};
</script>