<template>
  <div class="container">
    <div class="row">
      <Header></Header>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="jumbotron">
          <div class="container">
            <span class="display-4 h1">USC Specific News Page</span>
            <p class="lead">To USC We Sing</p>
          </div>
        </div>
     </div>
     <body>
       <div class="wrapper">
          <div class="leftcolumn">
            <div class="headline">
            <h3> {{articles[2].headline}} </h3>
            </div>
            <div class="authordate"> 
              Author: {{articles[2].author}}<br>
              Date Published:{{articles[2].date}} {{articles[2].time}}
            </div>
            <div class="content">
              <p>{{articles[2].content}}</p>
            </div>
          </div>
          
          <div class="rightcolumn">
            <img :src='articles[2].image' alt="Article Image">
          </div>
           

         
          
       </div>
     </body>
     
    </div>
    <div class="row">
      <Footer></Footer>
      </div>
    
    
    <!-- <Articles :articles="articles" /> -->
    
    
    <!-- <div :key="article.id" v-for="article in articles"> -->
            <!-- <h3> {{article.headline}}</h3> -->
            <!-- <img :src="`/assets/img/`+article.image" alt="park"> -->
            <!-- <img :src='article.image' alt="Article Image"> -->
            <!-- <p>{{article.content}}</p> -->
    <!-- </div> -->
    
 
    
    

  </div>
</template>

<script>
import Header from './components/dcism/Header.vue'
import Footer from './components/dcism/Footer.vue'
//import Articles from './components/dcism/NewsPageSpecific/Articles'

export default {
  name: 'App',
  components: {
    Header,
    Footer
    //Articles,
  },
  data() {
    return {
      articles: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/articles')
    .then(res => res.json())
    .then(data => this.articles = data)
    //.catch(err => console.log(err.message))
  },
  methods() {
  },
  created() {
    // this.articles = [
    //   {
    //     id:1,
    //     headline: 'Doctors Appointment',
    //     content: 'blah blah blah 1',
    //     image: 'ArrowGuy.jpg',
    //   },
    //   {
    //     id:2,
    //     headline: 'Meeting at School',
    //     content: 'March 3rd at 1:30pm',
    //     image: 'Park.jpg',
    //   },
    //   {
    //     id:3,
    //     headline: 'Food Shopping',
    //     content: 'March 3rd at 11:00am',
    //     image: 'Gorilla.png',
    //   },
    // ]
  }
}
</script>

<style scoped>

/* .image {
  padding-top: 5%;
  padding-bottom: 5%;
}

body .image img{
  display: block;
  margin-left: auto;
  width: 50%;
} */

img{
  display:flex;
  width: 670px;
  Height:487px;
  
} 

body {
    background-color: #228B22;
    margin: 0 auto;
    
}    
.wrapper {
      width: 1120px;
      margin: 0 auto;
      
      
}
.leftcolumn, .rightcolumn {
    border: 1px solid #228B22;
    float: left;
    min-height: 450px;
    
}
.leftcolumn {
      width: 450px;
      background-color: #DCDCDC;
      overflow-x: hidden;
      overflow-y: auto;
      height: 490px;
}
.rightcolumn {
      width: 200px;
      margin: 0;
}
.sidemenu {
  background-color: aliceblue;
  width: fit-content;
  float: right;
  opacity: 0.8;
  
}

.authordate {
  color: #228B22;
}


</style>
