<template>
  <div class="404">
    <h1>{{ msg }}</h1>
    <div class="col6">    <img src="https://media.giphy.com/media/g79am6uuZJKSc/giphy.gif" alt="something went wrong"></div>

    <p v-html="body"></p>
    <button class="btn btn-primary" type="submit" ><router-link :to="{ name: 'intro'}">Return to homepage</router-link></button>
 </div>
</template>

<script>
export default {
  name: 'notFound',
  data() {
    return {
      msg: 'Oops...',
      body:
        '404, this page does not excist...',
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.col6{
  width: 200px;
  height: 80px;
  margin: 1rem auto;

}
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
