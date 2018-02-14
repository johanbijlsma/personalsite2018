<template>
  <div class="intro">
    <h1>{{ msg }}</h1>
    <p v-html="body"></p>
 </div>
</template>

<script>
export default {
  name: "intro",
  data() {
    return {
      msg: "Creative Front-end Developer",
      body:
        'A creative front-end dev who loves building out cool projects together with a team. I really love working on the look and feel part off a site or application. <br /><br /> Please feel free to browse through both my professional and my hobby projects under <a href="#work">#work</a>. If you would like to reach out and contact me; you can find more info under <a href="#reachingout">#reachingout</a>'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
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
}
</style>  
