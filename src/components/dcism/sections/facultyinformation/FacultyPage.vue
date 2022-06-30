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

                    <!--===== Single Blog Item Start =========-->

                      <div class="ebook-feature">
                          <!-- ebook feature component -->
                          <FacultyDisplay />
                      </div>
                    
                    <!--===== Single Blog Item End =========-->


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
import Breadcrumb2 from "@/components/dcism/sections/BreadCrumb2";
import FacultyDisplay from "@/components/dcism/sections/facultyinformation/FacultyDisplay";

export default {
    name: "FacultyPage",
    components: {
        HeaderElement,
        Breadcrumb,
        Footer,
        OffcanvasSearchBox,
        Breadcrumb2,
        FacultyDisplay,
    },
    metaInfo: {
        title: "Faculty | DCISM",
        htmlAttrs: {
        lang: "en",
        amp: true,
        },
    },
};
    

</script>