<template>
    <div class="tab-history-wrap section-space--mt_80">
        <div class="row">
            <div class="col s10 text-center">
                <div class="tab-history-image">
                    <img :src="retData.admission[0].img" alt="image" class="center">
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
     import axios from 'axios'

    export default{
        name: 'AdmissionTabContentOne',
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
                    window.console.log(this.retData.admission[0].img);
                    }
                }).catch(err=>{
                    window.console.log(err)
                });
            }
        }
    };
</script>
