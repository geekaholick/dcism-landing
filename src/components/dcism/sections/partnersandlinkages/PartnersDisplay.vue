<template>
    <div class="feature-list__one">
        <div class="row">
            <div v-for="(partner, index) in returnedData" :key="index" class="col-lg-6 wow move-up" id="app">
                <div class="grid-item animate">
                    <div class="ht-box-icon style-01">
                        <div class="icon-box-wrap">
                            <div class="image">
                                <img :src="partner.img" class="img-fluid" alt="aeroland-app-showcase-box-icon-image-01">
                            </div>
                            <div class="content">
                                  <h6 class="heading">{{ partner.name }}</h6>
                                <div class="text">{{ partner.description }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
      name: "PartnersDispaly",
      mounted(){
        this.getData();
      },
      methods:{
        getData(){
          let self = this;
          axios.get('http://127.0.0.1:8080/api/partners').then(res=>{
            if(res.status==200){
              self.returnedData = res.data.partners;
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
