<template>
    <div class="how-it-works-area how-it-works-bg section-space--pb_120">
        <div class="container">
            <div class="content">
                <h3 class="section-title font-weight--light mb-15 wow move-up">{{retData.paragraphs[0].Title}}</h3>
                    <p class = "paragraph" v-for="(item, index) in retData.paragraphs[0].Body" :key="index"> {{item}}</p>
                         
                <h6 class="subtitle">Programs Offered</h6>
                    <p class = "paragraph" v-for="(item, index) in retData.programs" :key="'a'+index"> {{item}} <br></p>
                            
                <h6 class="subtitle1">{{retData.paragraphs[1].Title}}</h6>
                    <p class = "paragraph" v-for="(item, index) in retData.paragraphs[1].Body" :key="'b'+index"> {{item}}</p>
            </div>
        </div>
    </div>
    
</template>

<script>

    import axios from 'axios'

    export default{
        name: 'Feature',
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
                    self.retData = res.data;
                    window.console.log(self.retData)
                    }
                }).catch(err=>{
                    window.console.log(err)
                });
            }
        }
    };


</script>

<style lang="scss" scoped>
    .content{
        text-align: justify;
    }

    .paragraph{
        color: black;
    }

    .section-title{
        font-size: 26px;
        color: black;
        text-decoration: underline;
    }

    .subtitle{
        margin-top: 5%;
        padding-bottom: 5px;
    }

    .subtitle1{
        margin-top: 5%;
        padding-bottom: 5px;
        color: #ee7455;
    }
    

</style>