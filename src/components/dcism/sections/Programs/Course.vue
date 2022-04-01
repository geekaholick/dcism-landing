<template>
    <div class="row box-image-wrapper">
        <div v-for="(item, index) in retData.programs" :key="index" class="col-md-4 box-image position-relative text-center wow move-up">
            <div class="box-image__media">
               <img :src="item.img1" class="img-fluid" alt="about icon"> 
            </div>
            <div class="box-image__content">
                <h6 class="box-image__title">{{ item.title }}</h6>
            </div>
        </div> 
    </div>
</template>

<script>
     import axios from 'axios'

    export default{
        name: 'Course',
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
                axios.get('http://127.0.0.1:8088/api/IT11').then(res=>{
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


