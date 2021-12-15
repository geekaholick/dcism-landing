<template>
    <div>
        <!-- <img :src="'./public/Park.jpg'"> -->
        <div :key="article.id" v-for="article in articles">
            <h3> {{article.headline}}</h3>
           
            
             <!-- <img src="@/assets/img/Park.jpg">  --> <!-- WORKS -->
             <!-- <img src="/public/img/Park.jpg"> -->
             <!-- <img src="/public/img/Park.jpg"> -->
             <!-- <img :src="`{{article.image}}`"> -->
             <!-- <img :src="article.image" > -->
             <!-- <img src="article.image"> -->
            <!-- {{article.image}} -->
            <!-- <img src="/assets/img/Park.jpg" alt="Article Image">  -->
            <!-- <img src="`@/assets/img/${article.image}`"/> -->
             <!-- <img v-bind:src="article.image" alt="Article Image">  -->
            <!-- {{article.image}} -->
           <img v-bind:src="'/assets/img/' + article.image" /> 
           <img :src="`/assets/img/`+article.image">

           <img :src="`../assets/img/`+article.image">
           
            <p> {{article.content}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Articles',
    props: {
        articles: Array,
    },
}
</script>


