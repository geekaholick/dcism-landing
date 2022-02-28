<template>
    <div class="main-container">
        <Header />
        <Hero />

        <div class="digital-agency-assistance-area  section-space--ptb_120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="digital-agency-section-title text-center section-space--mb_60">
                            <h3 class="section-title font-weight--light mb-15 wow move-up">Frequently Asked Questions</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div role="tablist" v-for="(faq,index) in returnedData" :key="index">
                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button block href="#" v-b-toggle="'accordion-' + index" variant="info" style="background-color: #5E61E7">{{ faq.title }}</b-button>
                            </b-card-header>
                            <b-collapse :id="'accordion-' + index" accordion="faq-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ faq.content }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                    </div>  
                </div>
                
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from "@/components/dcism/Header.vue";
    import Hero from "@/components/dcism/sections/Hero";
    import Footer from "@/components/dcism/Footer.vue";
    import axios from 'axios';
    
    export default {
        name: "FAQPage",
        components: {
            Header,
            Hero,
            Footer,
        },
        mounted(){
            this.getData();
        },
        methods:{
            getData(){
                let self = this;
                axios.get('http://127.0.0.1:8080/api/faqs').then(res=>{
                    if(res.status==200){
                        self.returnedData = res.data.faqs;
                        window.console.log(self.returnedData)
                    }
                }).catch(err=>{
                    window.console.log(err)
                });
            }
        },
        data(){
            return{
                returnedData:[],
            }
        }
    };
</script>

<style lang="scss">

</style>