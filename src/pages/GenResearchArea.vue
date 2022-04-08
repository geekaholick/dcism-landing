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
                                        <img class="img-fluid" :src="retData.research[0].img4" alt="Blog Images">
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
                                        <p>{{retData.research[0].subhead3}}</p>
                                    </div>

                                    <h4 class="post-title font-weight--light">
                                        <p>{{retData.research[0].title3}}</p>
                                    </h4>

                                    <div class="post-meta mt-20">
                                        <div class="post-author">
                                                <img class="img-fluid avatar-96" src="@/assets/img/team/admin.png" alt="image"> 
                                                Michelle Mamites
                                        </div>
                                        <div class="post-date">
                                            <span class="far fa-calendar meta-icon"></span>
                                            March 20, 2018
                                        </div>
                                    </div>

                                    <div class="post-excerpt mt-15">
                                        <p>{{retData.research[0].body4}}</p>
                                        <p>{{retData.research[0].body5}}</p>
                                        <p>{{retData.research[0].body6}}</p>
                                        <p>{{retData.research[0].body7}}</p>
                                    
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

