<template>
    <div class="row">
        <div v-for="(facultyMem, x) in returnedData" :key="x" class="col-lg-4 wow move-up" style="padding: 2em;">
            <div class="service-grid">
                <div class="ht-service-box--two text-center" style="border-radius: 20px; padding: 10px 10px 10px 10px; box-shadow: 0 0 10px 2px gray; padding-top: 0.5em">
                      <div class="image mb-20">
                          <img :src="facultyMem.icon" class="img-fluid" alt="Picture of faculty member" style="width:200px">
                      </div>
                      <div class="content">
                          <h6 class="ht-heading mb-15">{{ facultyMem.name }}</h6>
                          <h6 class="sub-heading">{{ facultyMem.position }}</h6>
                          <h6 class="sub-heading" style="color: forestgreen">{{ facultyMem.email }}</h6>
                          <h6 class="sub-heading" style="color: black">Degrees:</h6>
                          <div class="service_text" style="font-weight: bold">{{ facultyMem.degrees[0] }}</div>
                          <div class="service_text" style="font-weight: bold">{{ facultyMem.degrees[1] }}</div>
                      </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'FacultyDisplay',
        mounted(){
          this.getData();
        },
        methods:{
          getData(){
            let self = this;
            axios.get('http://127.0.0.1:8080/api/faculty').then(res=>{
              if(res.status===200){
                self.returnedData = res.data.facultyMems;
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

    }
</script>
