<template>
    <div class="main-container">


        <!-- Navbar section -->
        <Header />

        <!-- breadcrumb strat -->
        <Breadcrumb>
            <template slot="breadcrumb">
                <div class="breadcrumb_box text-center">
                    <ul class="breadcrumb-list">
            <li class="breadcrumb-item active" style="font-size: 15px">
              Department of Computer, Information Sciences, and Mathematics
            </li>
          </ul>
                    <h2 class="breadcrumb-title">DCISM Research</h2>
                    <!-- breadcrumb-list start -->
                    <ul class="breadcrumb-list">
                        <li class="breadcrumb-item">
                            <router-link :to="{name:'Home'}">Home</router-link>
                        </li>
                        <li class="breadcrumb-item active">General Research Area</li>
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
                                <div class="post-feature blog-thumbnail">
                                        <img class="img-fluid" :src="retData.research[0].img1" alt="Blog Images">
                                </div>
                                <!-- Post Feature End -->

                                <!-- Post info Start -->
                                <div class="post-info lg-blog-post-info">
                                    <div class="post-categories">
                                        <p>{{retData.research[0].subhead1}}</p>
                                    </div>

                                    <h4 class="post-title font-weight--light">
                                        <p>{{retData.research[0].title1}}</p>
                                    </h4>

                                    <div class="post-meta mt-20">
                                        <div class="post-author">
                                                <img class="img-fluid avatar-96" src="@/assets/img/team/admin.png" alt="image"> 
                                                Matthew Lee and Bonnie Wong
                                        </div>
                                        <div class="post-date">
                                            <span class="far fa-calendar meta-icon"></span>
                                            December 17, 2019
                                        </div>
                                    </div>

                                    <div class="post-excerpt mt-15">
                                        <p>{{retData.research[0].body1}}</p>
                                        <p>{{retData.research[0].body2}}</p>
                                    </div>

                                    
                                </div>
                                <!-- Post info End -->
                            </div>
                            <!--===== Single Blog Item End =========-->

                            <!--======= Single Blog Item Start ========-->
                            <div class="single-blog-item lg-blog-item border-bottom wow move-up">
                                <!-- Post Feature Start -->
                                <div class="post-feature blog-thumbnail">
                                        <img class="img-fluid" :src="retData.research[0].img2" alt="Blog Images">
                                </div>
                                <!-- Post Feature End -->

                                <!-- Post info Start -->
                                <div class="post-info lg-blog-post-info">
                                    <div class="post-categories">
                                        <p>{{retData.research[0].subhead2}}</p>
                                    </div>

                                    <h4 class="post-title font-weight--light">
                                        <p>{{retData.research[0].title2}}</p>
                                    </h4>

                                    <div class="post-meta mt-20">
                                        <div class="post-author">
                                                <img class="img-fluid avatar-96" src="@/assets/img/team/admin.png" alt="image"> 
                                                Sean Silverthorne
                                        </div>
                                        <div class="post-date">
                                            <span class="far fa-calendar meta-icon"></span>
                                            October 29, 2019
                                        </div>
                                    </div>

                                    <div class="post-excerpt mt-15">
                                        <p>{{retData.research[0].body3}}</p>
                                    
                                    </div>

                                    
                                </div>
                                <!-- Post info End -->
                            </div>
                            <!--===== Single Blog Item End =========-->

                            <!--========== Single Blog Item Start ==========-->
                            <div class="single-blog-item lg-blog-item border-bottom wow move-up">
                                <!-- Post Feature Start -->
                                <div class="post-feature blog-thumbnail">
                                    <router-link to="/blog-details">
                                        <img class="img-fluid" src="@/assets/img/blog/blog-09-770x420.jpg" alt="Blog Images">
                                    </router-link>
                                </div>
                                <!-- Post Feature End -->

                                <!-- Post info Start -->
                                <div class="post-info lg-blog-post-info">
                                    <div class="post-categories">
                                        <router-link to="/">App Release</router-link>
                                    </div>

                                    <h4 class="post-title font-weight--light">
                                        <router-link to="/blog-details">Specialized Design Tools for 2019</router-link>
                                    </h4>

                                    <div class="post-meta mt-20">
                                        <div class="post-author">
                                            <router-link to="/blog-details">
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
                                        <router-link to="/blog-details" class="ht-btn ht-btn-sm">
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
                                        <router-link to="/blog-details">D&AD Festival 2019’s Brand Identity</router-link>
                                    </h4>

                                    <div class="post-meta mt-20">
                                        <div class="post-author">
                                            <router-link to="/blog-details">
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
                                        <router-link to="/blog-details" class="ht-btn ht-btn-sm">
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
                                    <router-link to="/blog-details">
                                        <img class="img-fluid" src="@/assets/img/blog/blog-01-770x420.jpg" alt="Blog Images">
                                    </router-link>
                                </div>
                                <!-- Post Feature End -->

                                <!-- Post info Start -->
                                <div class="post-info lg-blog-post-info">
                                    <div class="post-categories">
                                        <router-link to="/">App Release</router-link>
                                    </div>

                                    <h4 class="post-title font-weight--light">
                                        <router-link to="/blog-details">Specialized Design Tools for 2019</router-link>
                                    </h4>

                                    <div class="post-meta mt-20">
                                        <div class="post-author">
                                            <router-link to="/blog-details">
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
                                        <router-link to="/blog-details" class="ht-btn ht-btn-sm">
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
                                    <router-link to="/blog-details">
                                        <img class="img-fluid" src="@/assets/img/blog/blog-10-770x420.jpg" alt="Blog Images">
                                    </router-link>
                                </div>
                                <!-- Post Feature End -->

                                <!-- Post info Start -->
                                <div class="post-info lg-blog-post-info">
                                    <div class="post-categories">
                                        <router-link to="/">App Release</router-link>
                                    </div>

                                    <h4 class="post-title font-weight--light">
                                        <router-link to="/blog-details">Creativity Boosting App is Here</router-link>
                                    </h4>

                                    <div class="post-meta mt-20">
                                        <div class="post-author">
                                            <router-link to="/blog-details">
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
                                        <router-link to="/blog-details" class="ht-btn ht-btn-sm">
                                            <span class="btn-text">Read more </span>
                                        </router-link>
                                    </div>
                                </div>
                                <!-- Post info End -->
                            </div>
                            <!--===== Single Blog Item End =========-->
                        </div>
                    </div>

                    <div class="col-lg-4">
            
                    </div>
                </div>
            </div>
        </div>
        <!-- blog item wrapper end -->

        <!-- footer section -->
        <FooterMain />

        <!-- offcanvas search component -->

        <!-- off-canvas mobile menu -->
        <OffCanvasMobileMenu />

    </div>
</template>

<script>
    import Header from '@/components/dcism/Header'
    import Breadcrumb from '@/components/Breadcrumb'
    import FooterMain from '@/components/FooterMain'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'
    import axios from 'axios'

    export default {
        name: 'BlogListLargeImage',
        mounted(){
            this.getData();
        },
        data(){
            return {
                retData:[],
            }
        },

        methods: {
            getData() {
                let self = this;
                axios.get('http://127.0.0.1:8088/api/users').then(res=>{
                    if(res.status==200){
                    self.retData = res.data;
                    window.console.log(this.retData.programs[0].img1);
                    }
                }).catch(err=>{
                    window.console.log(err)
                });
            }
        },

        components: {
            Header,
            Breadcrumb,
            FooterMain,
            OffCanvasMobileMenu
        },

        metaInfo: {
            title: 'Aeroland - Blog',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>

