<template>
<section class="homepage">
  <div class="intro">
    <h1>{{ msg }}</h1>
    <p v-html="body"></p>
     </div>

      <div class="stack">
    <h2>{{stackMsg}}</h2>
    <p v-html="stackBody"></p>
    </div>
 </section>
 
</template>

<script>
export default {
  name: "intro",
  data() {
    return {
      msg: "Creative Front-end Developer",
      body:
        'A creative front-end dev who loves building out cool projects together with a team. I really love working on the look and feel part off a site or application. <br /><br /> Please feel free to browse through both my professional and my hobby projects under <router-link :to=\'{ name: \'work\' }\'>#work</router-link>. If you would like to reach out and contact me; you can find more info under <a href="#reachingout">#reachingout</a>',
      stackMsg: "Stack",
      stackBody:
         'HTML5, CSS3, (vanilla) JavaScript, AngularJS, Angular2, VueJS, React, Sass, Webpack, NPM, Gulp, Grunt, Git, Jekyll, Jenkins, Bamboo, Bootstrap, jQuery, Photoshop, Illustrator & Sketch. <br /> <br/> Further experienced in styling projects in Django, Wordpress, Jekyll, or custom build on PHP, .Net and Java. Currently my editor off choice is VS Code, and I enjoy Hyper terminal everyday on my Mac'
      };
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p {
  white-space: pre-line;
} */
</style>  
