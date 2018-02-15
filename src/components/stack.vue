<template>
  <div class="stack">
    <h1>{{ msg }}</h1>
    <p v-html="body"></p>
 </div>
</template>

<script>
export default {
  name: "stack",
  data() {
    return {
      msg: 'Stack',
      body:
        'HTML5, CSS3, (vanilla) JavaScript, AngularJS, Angular2, VueJS, React, Sass, Webpack, NPM, Gulp, Grunt, Git, Jekyll, Jenkins, Bamboo, Bootstrap, jQuery, Photoshop, Illustrator & Sketch. <br /> <br/> Further experienced in styling projects in Django, Wordpress, Jekyll, or custom build on PHP, .Net and Java. Currently my editor off choice is VS Code, and I enjoy Hyper terminal everyday on my Mac'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>  
