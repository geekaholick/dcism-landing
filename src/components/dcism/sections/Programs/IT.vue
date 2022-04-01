<template>
    <div class="feature-slider-area section-space--pt_60">
        <div class="feature-slider position-relative">
            <div class="feature-slider__container">
                <div class="feature-slider__wrapper">
                    <swiper :options="swiperOption">
                        <swiper-slide v-for="(item, index) in retData.programs" :key="index">
                            <div class="feature-slider__single-slide">
                                <div class="feature-slider__single-slide-wrapper">
                                    <div class="row align-items-center">
                                        <div class="col-md-4 wow move-up">
                                            <div class="image">
                                                <img :src="item.img2" class="img-fluid" alt="">
                                            </div>
                                        </div>
                                        <div class="col-md-4 wow move-up">
                                            <div class="content">
                                                <h4 class="title">{{item.title}}</h4>
                                                <div class="text">{{item.body}}</div>
                                            </div>  
                                        </div>
                                        <div class="col-md-4 wow move-up">
                                            <div class="content">
                                                <h4 class="title">{{item.title}} builds competencies for these Jobs</h4>
                                                <ul v-for="(job, index) in item.jobs" :key="index">
                                                     <li>{{job}}</li>   
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                
                        
                         <div class="swiper-pagination swiper-pagination--vertical swiper-pagination-1"  slot="pagination"></div>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'featureTwo',
        mounted(){
            this.getData();
        },
        data (){
            return {
                swiperOption: {
                    speed: 600,
                    loop: true,
                    slidesPerView: 1,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    breakpoints: {
                        768:{
                            clickable: false
                        }
                    }
                },
                retData:[]
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
        }
    };
</script>