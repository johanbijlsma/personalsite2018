<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{body}}</p>
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Creative Front-end Developer',
      body: 'A creative front-end dev who loves building out cool projects together with a team. I really love working on  the look and feel part off a site or application.',
    };
  },
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
</style>
