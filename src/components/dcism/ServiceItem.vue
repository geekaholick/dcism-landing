
<template>
    <div class="digital-agency-grid">
        <a href="#" class="digital-agency-assistance__warap wow move-up" v-for="(item, index) in retData" :key="index">
            <div class="digital-agency-assistance__box">
                <div class="digital-agency-assistance__images">
                    <div class="images-midea" id="removeBG">
                        <img :src="item.img" class="img-fluid" alt="service thumb">
                    </div>
                </div>
                <div class="digital-agency-assistance__content mt-30 text-center">
                    <p class="description">{{ item.desc }}</p>
                </div>
            </div>
        </a>
    </div>

    


</template>

<script>
    import axios from 'axios'

    export default{
        name: 'ServiceItem',
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
                axios.get('http://127.0.0.1:8081/api/users').then(res=>{
                    if(res.status==200){
                    self.retData = res.data.achievement;
                    window.console.log(this.retData.achievement[0].img);
                    }
                }).catch(err=>{
                    window.console.log(err)
                });
            }
        }
    };
</script>

<style lang="scss" scoped >
  
   .images-midea{
        display: block;
        margin-left: auto;
        margin-right: auto;
        height:30%;
        width: 30%;
   }
    
    .description{
        font-weight: bold;
            color: black;
            & strong {
                color: rgb(0, 0, 0);
                font-weight: 500;
            }
    }

    .digital-agency-grid {
        grid-template-columns: repeat( 4,1fr);
    }

    #removeBG::after{
        background-image: none;
    }

</style>