<template>
    <div>
        <!-- portfolio item wrapper start -->
            <div class="portfolio-pages-wrapper section-space--ptb_100 border-bottom gray-gradient">
                <div class="container">
                    <div class="row" v-if="events.events">
                        <div class="col-lg-4 col-md-6 mb-30 wow move-up" v-for="event in events.events" :key="event.id">
                            <div class="portfolio-grid-caption">
                                <router-link to="#" class="single-grid-caption">
                                    <div class="single-portfolio__thumbnail">
                                        <img class="img-fluid" :src="event.image" alt="">
                                    </div>
                                </router-link>
                                <div class="post-info">
                                    <h5 class="post-title font-weight--bold">
                                        <router-link to="#">{{ event.title }}</router-link>
                                    </h5>
                                    <div class="post-categories">
                                        <p>Event date: {{ event.event_date }}</p>
                                    </div>
                                    <p>{{ event.desc }}</p>
                                    <router-link to="#" style=" font-weight:normal; color:rebeccapurple; text-align:right">Read More ></router-link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!---- If there are no events in the database ---->
                    <div class="row" v-if="events.events == 0">
                        <div class="post-info lg-blog-post-info">

                            <h4 class="post-title font-weight--light text-center">
                                There are currently no events to be displayed.
                            </h4>

                            <div class="post-read-more mt-20">
                                <router-link to="/" >
                                    <span class="font-weight--original" style="font-size:20px;">Back to Home</span>
                                </router-link>
                            </div>

                        </div>
                    </div>
                    <!----------------------------------------------->

                </div>
            </div>
        <!-- portfolio item wrapper end -->

    </div>
</template>

<script>
    import axios from 'axios';
    
    export default {
        name: 'Events',
        components: {
        },

        data () {
            return {
                events: [],
            }
        },

        mounted(){
            this.getEvents();
        },

        methods: {
            getEvents() {
                let self = this;
                axios.get('http://localhost:8000/api/events')
                    .then(res=>{
                        if(res.status==200){
                            self.events = res.data;
                        }
                    })
                    .catch(err=>{
                        window.console.log(err)
                    });
            }
        }
    }
</script>

