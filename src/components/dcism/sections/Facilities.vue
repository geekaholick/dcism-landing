<template>
    <div class="degital-agency-start-working section-space--pt_120" id="facilities">
    <section class="facilities">
        <h1>Our Facilities</h1>
        <p>lorem ipsum</p>

        <div class="row">
            <div class="facilities-col">
             <img :src="rooms[0].details" alt="">
             <h4>{{rooms[0].title}}</h4>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div class="facilities-col">
             <img :src="rooms[1].details" alt="">
             <h4>{{rooms[1].title}}</h4>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div class="facilities-col">
             <img :src="rooms[2].details" alt="">
             <h4>{{rooms[2].title}}</h4>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>                                     
        </div>
    </section>
    </div>
</template>
<script>
export default {
    name: 'Facilities',
    components:{
        
    },
    data(){
        return{
            rooms:[]
        }
    },
    mounted(){
        fetch('http://localhost:3000/rooms')
        .then(res => res.json())
        .then(data => this.rooms = data)
        .catch(err => console.log(err.message))
    }
}

</script>
