<template>
    <div class="main-container">
        <HeaderElement />

        <Breadcrumb2 />

      <!-- blog item wrapper start -->
        <div
        class="blog-pages-wrapper section-space--ptb_100 border-bottom"
        id="linkages_section"
        ref="linkages"
        >
            <div class="container">
                <div class="row">

                    <div class="lg-col-2"></div>

                    <div class="lg-col-10">
                    <!--===== Single Blog Item Start =========-->

                        <div id="partnerName"></div>
                        <img src="" id="partnerImage" style="width: 200px"/>

                        <PartnersDisplay />
                        
                    
                    <!--===== Single Blog Item End =========-->
                    </div>

                    <div class="lg-col-2"></div>

                </div>
            </div>
        </div>

        <Footer />

    </div>
    <!-- blog item wrapper end -->

</template>

<script>
/* eslint-disable */
import HeaderElement from "@/components/dcism/Header.vue";
import Breadcrumb from "@/components/dcism/Breadcrumb.vue";
import Footer from "@/components/dcism/Footer.vue";
import OffcanvasSearchBox from "@/components/dcism/OffcanvasSearchBox";
import SidebarAnnouncement from "@/components/dcism/sections/announcements/SidebarAnnouncement";
import Api from "@/api/api.js";
import Breadcrumb2 from "@/components/dcism/sections/BreadCrumb2";
import PartnersDisplay from "@/components/dcism/sections/partnersandlinkages/PartnersDisplay";

export default {
    name: "PartnersAndLinkages",
    components: {
        HeaderElement,
        Breadcrumb,
        Footer,
        OffcanvasSearchBox,
        Breadcrumb2,
        PartnersDisplay
    },
    metaInfo: {
        title: "PartnersAndLinkages | DCISM",
        htmlAttrs: {
        lang: "en",
        amp: true,
        },
    },
};
    

</script>