<template>
  <div class="contact">
    <h1>{{ msg }}</h1>
    <p v-html="body"></p>
 </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      msg: 'Reaching out; how to get in touch?',
      body:
        'You can me find online through the following media / places, or get in touch through e-mail or by phone.'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>  
