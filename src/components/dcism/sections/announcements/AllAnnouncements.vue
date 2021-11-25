<template>
    <div class="main-container">

        <!-- Navbar section -->
        <HeaderElement />

        <!-- breadcrumb strat -->
        <Breadcrumb>
            <template slot="breadcrumb">
                <div class="breadcrumb_box text-center">
                    <ul class="breadcrumb-list">
                        <li class="breadcrumb-item active" style="font-size: 15px;">Department of Computer, Information Sciences, and Mathematics</li>
                    </ul>
                    <h2 class="breadcrumb-title">Announcements</h2>
                    <!-- breadcrumb-list start -->
                    <ul class="breadcrumb-list">
                        <li class="breadcrumb-item">
                            <router-link :to="{name:'Home'}">Home</router-link>
                        </li>
                        <li class="breadcrumb-item active">Announcements</li>
                    </ul>
                    <!-- breadcrumb-list end -->
                </div>
            </template>
        </Breadcrumb>
        <!-- breadcrumb end -->


        <!-- blog item wrapper start -->
        <div class="blog-pages-wrapper section-space--ptb_100 border-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="main-blog-wrap">
                            <!--======= Single Blog Item Start ========-->
                            <div class="single-blog-item lg-blog-item border-bottom wow move-up">
                                <!-- Post Feature Start -->
                                <div class="post-feature blog-thumbnail" style="width: 100%; height: 450px;">
                                    <router-link to="/announcements" style="width: 100%; height: 100%; object-fit: contain !important;" class="d-flex justify-content-center">
                                        <img class="img-fluid" src="https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/259382976_4051727131594497_4241972222524495545_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=DNoNG1Bb-WEAX_qMIJV&_nc_oc=AQmpOxGzFJ3-lTLqAmOiTS93F1WsScnoSvbCcPlD5g7NEnKe2VOR9yrjan8v6koOQdE&_nc_ht=scontent.fceb2-1.fna&oh=903a54977bacbf454e1c89027bc810a4&oe=61A312BB" alt="Blog Images" style="width: 100%; height: 100%; object-fit: cover !important;">
                                    </router-link>
                                </div>
                                <!-- Post Feature End -->

                                <!-- Post info Start -->
                                <div class="post-info lg-blog-post-info">
                                    <div class="post-categories">
                                        <router-link to="/">4 mins read</router-link>
                                    </div>

                                    <h4 class="post-title font-weight--light">
                                        <router-link to="/announcements">Specialized Design Tools for 2019</router-link>
                                    </h4>

                                    <div class="post-meta mt-20">
                                        <div class="post-author">
                                            <router-link to="/announcements">
                                                <img class="img-fluid avatar-96" src="@/assets/img/team/admin.png" alt="image"> 
                                                Harry Ferguson
                                            </router-link>
                                        </div>
                                        <div class="post-date">
                                            <span class="far fa-calendar meta-icon"></span>
                                            January 14, 2019
                                        </div>
                                    </div>

                                    <div class="post-excerpt mt-15">
                                        <p>As a result, along with the larger corporate-backed applications, we have a huge host of small tools and libraries, each designed to solve a particular problem or preserve a certain set of possibilities. A couple of these projects have become institutions: Modernizr, keeping the technical …</p>
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

                            <!--========== Single Blog Item Start ==========-->
                            <div class="single-blog-item lg-blog-item border-bottom wow move-up">
                                <!-- Post Feature Start -->
                                <div class="post-feature post-quote">
                                    <h5 class="post-quote-text">
                                        <router-link to="/announcements">
                                            “Design is not just what it looks like and feels like. Design is how it works. –Steve Jobs”
                                        </router-link>
                                    </h5>
                                    <h6 class="post-quote-name">- Kasahara May</h6>
                                </div>
                                <!-- Post Feature End -->

                                <!-- Post info Start -->
                                <div class="post-info lg-blog-post-info">
                                    <div class="post-categories">
                                        <router-link to="">4 mins read</router-link>
                                    </div>

                                    <h4 class="post-title font-weight--light">
                                        <router-link to="/announcements">Foundation 3 – the Truly Great Move</router-link>
                                    </h4>

                                    <div class="post-meta mt-20">
                                        <div class="post-author">
                                            <router-link to="/announcements">
                                                <img class="img-fluid avatar-96" src="@/assets/img/team/admin.png" alt="image">
                                                Harry Ferguson
                                            </router-link>
                                        </div>
                                        <div class="post-date">
                                            <span class="far fa-calendar meta-icon"></span>
                                            January 14, 2019
                                        </div>
                                    </div>

                                    <div class="post-excerpt mt-15">
                                        <p>Responsive design seems to have gone from zero to about a thousand miles an hour in no time flat. And things are still changing fast enough that small development shops are hard-pushed to stay up to date, let alone conduct their own R&amp;D. That’s where Foundation…</p>
                                    </div>

                                    <div class="post-read-more mt-20">
                                        <router-link to="/announcements" class="ht-btn ht-btn-sm">
                                            <span class="btn-text">Read more </span>
                                        </router-link>
                                    </div>
                                </div>
                                <!-- Post info End -->
                            </div>
                            <!--=========== Single Blog Item End =============-->

                            <!--========== Single Blog Item Start ==========-->
                            <div class="single-blog-item lg-blog-item border-bottom wow move-up">
                                <!-- Post Feature Start -->
                                <div class="post-feature blog-thumbnail">
                                    <router-link to="/announcements">
                                        <img class="img-fluid" src="@/assets/img/blog/blog-09-770x420.jpg" alt="Blog Images">
                                    </router-link>
                                </div>
                                <!-- Post Feature End -->

                                <!-- Post info Start -->
                                <div class="post-info lg-blog-post-info">
                                    <div class="post-categories">
                                        <router-link to="/">4 mins read</router-link>
                                    </div>

                                    <h4 class="post-title font-weight--light">
                                        <router-link to="/announcements">Specialized Design Tools for 2019</router-link>
                                    </h4>

                                    <div class="post-meta mt-20">
                                        <div class="post-author">
                                            <router-link to="/announcements">
                                                <img class="img-fluid avatar-96" src="@/assets/img/team/admin.png" alt="image"> 
                                                Harry Ferguson
                                            </router-link>
                                        </div>
                                        <div class="post-date">
                                            <span class="far fa-calendar meta-icon"></span>
                                            January 14, 2019
                                        </div>
                                    </div>

                                    <div class="post-excerpt mt-15">
                                        <p>As a result, along with the larger corporate-backed applications, we have a huge host of small tools and libraries, each designed to solve a particular problem or preserve a certain set of possibilities. A couple of these projects have become institutions: Modernizr, keeping the technical …</p>
                                    </div>

                                    <div class="post-read-more mt-20">
                                        <router-link to="/announcements" class="ht-btn ht-btn-sm">
                                            <span class="btn-text">Read more </span>
                                        </router-link>
                                    </div>
                                </div>
                                <!-- Post info End -->
                            </div>
                            <!--=========== Single Blog Item End =============-->

                            <!--========== Single Blog Item Start ==========-->
                            <div class="single-blog-item lg-blog-item border-bottom wow move-up">

                                <!-- Post Feature Start -->
                                <div class="post-feature post-link">
                                    <h5 class="link-text">
                                        <a href="https://themeforest.net/user/bootxperts/portfolio" target="_blank">
                                        https://themeforest.net/user/bootxperts/portfolio</a>
                                    </h5>
                                </div>
                                <!-- Post Feature End -->

                                <!-- Post info Start -->
                                <div class="post-info lg-blog-post-info">
                                    <div class="post-categories">
                                        <router-link to="">Project Showcase</router-link>
                                    </div>

                                    <h4 class="post-title font-weight--light">
                                        <router-link to="/announcements">D&AD Festival 2019’s Brand Identity</router-link>
                                    </h4>

                                    <div class="post-meta mt-20">
                                        <div class="post-author">
                                            <router-link to="/announcements">
                                                <img class="img-fluid avatar-96" src="@/assets/img/team/admin.png" alt="image"> Harry Ferguson
                                            </router-link>
                                        </div>
                                        <div class="post-date">
                                            <span class="far fa-calendar meta-icon"></span>
                                            January 14, 2019
                                        </div>
                                    </div>

                                    <div class="post-excerpt mt-15">
                                        <p>The collaborative working tool, used by employees to chat and share projects, has a new “simplified” logo with a smaller color palette, that does away with the brand’s characteristic slanted hashtag symbol. It’s through mistakes that you actually can grow. You have to get bad …</p>
                                    </div>

                                    <div class="post-read-more mt-20">
                                        <router-link to="/announcements" class="ht-btn ht-btn-sm">
                                            <span class="btn-text">Read more </span>
                                        </router-link>
                                    </div>
                                </div>
                                <!-- Post info End -->
                            </div>
                            <!--=========== Single Blog Item End =============-->

                            <!--======= Single Blog Item Start ========-->
                            <div class="single-blog-item lg-blog-item border-bottom wow move-up">
                                <!-- Post Feature Start -->
                                <div class="post-feature blog-thumbnail">
                                    <router-link to="/announcements">
                                        <img class="img-fluid" src="@/assets/img/blog/blog-01-770x420.jpg" alt="Blog Images">
                                    </router-link>
                                </div>
                                <!-- Post Feature End -->

                                <!-- Post info Start -->
                                <div class="post-info lg-blog-post-info">
                                    <div class="post-categories">
                                        <router-link to="/">4 mins read</router-link>
                                    </div>

                                    <h4 class="post-title font-weight--light">
                                        <router-link to="/announcements">Specialized Design Tools for 2019</router-link>
                                    </h4>

                                    <div class="post-meta mt-20">
                                        <div class="post-author">
                                            <router-link to="/announcements">
                                                <img class="img-fluid avatar-96" src="@/assets/img/team/admin.png" alt="image"> 
                                                Harry Ferguson
                                            </router-link>
                                        </div>
                                        <div class="post-date">
                                            <span class="far fa-calendar meta-icon"></span>
                                            January 14, 2019
                                        </div>
                                    </div>

                                    <div class="post-excerpt mt-15">
                                        <p>As a result, along with the larger corporate-backed applications, we have a huge host of small tools and libraries, each designed to solve a particular problem or preserve a certain set of possibilities. A couple of these projects have become institutions: Modernizr, keeping the technical …</p>
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

                            <!--======= Single Blog Item Start ========-->
                            <div class="single-blog-item lg-blog-item border-bottom wow move-up">
                                <!-- Post Feature Start -->
                                <div class="post-feature blog-thumbnail">
                                    <router-link to="/announcements">
                                        <img class="img-fluid" src="@/assets/img/blog/blog-10-770x420.jpg" alt="Blog Images">
                                    </router-link>
                                </div>
                                <!-- Post Feature End -->

                                <!-- Post info Start -->
                                <div class="post-info lg-blog-post-info">
                                    <div class="post-categories">
                                        <router-link to="/">4 mins read</router-link>
                                    </div>

                                    <h4 class="post-title font-weight--light">
                                        <router-link to="/announcements">Creativity Boosting App is Here</router-link>
                                    </h4>

                                    <div class="post-meta mt-20">
                                        <div class="post-author">
                                            <router-link to="/announcements">
                                                <img class="img-fluid avatar-96" src="@/assets/img/team/admin.png" alt="image"> 
                                                Harry Ferguson
                                            </router-link>
                                        </div>
                                        <div class="post-date">
                                            <span class="far fa-calendar meta-icon"></span>
                                            January 14, 2019
                                        </div>
                                    </div>

                                    <div class="post-excerpt mt-15">
                                        <p>As a result, along with the larger corporate-backed applications, we have a huge host of small tools and libraries, each designed to solve a particular problem or preserve a certain set of possibilities. A couple of these projects have become institutions: Modernizr, keeping the technical …</p>
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
                                <div class="inner">
                                    <a href="#" rel="prev">
                                        <div><img class="img-fluid border-radus-5" src="@/assets/img/portfolio/portfolio-08-01-120x80.jpg" alt="portfolio-08-01">
                                            <h6>Recent announcements</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="nav-item next">
                                <div class="inner">
                                    <a href="#" rel="next">
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
import HeaderElement from '@/components/dcism/Header.vue'
import Breadcrumb from '@/components/dcism/Breadcrumb.vue'
import Footer from '@/components/dcism/Footer.vue'
import OffcanvasSearchBox from "@/components/dcism/OffcanvasSearchBox"
import SidebarAnnouncement from '@/components/dcism/sections/announcements/SidebarAnnouncement'

export default {
    name: 'AllAnnouncements',
    components: {
        HeaderElement,
        Breadcrumb,
        Footer,
        OffcanvasSearchBox,
        SidebarAnnouncement
    },
    metaInfo: {
            title: 'Announcements | DCISM',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
}
</script>