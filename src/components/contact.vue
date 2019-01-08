<template>
  <div class="contact">
    <h1>{{ msg }}</h1>
    <p v-html="body"></p>
    <ul class="contact__list">
        <li class="contact__buttons"> <a class="contact__link--linkedin " href="https://www.linkedin.com/in/johanbijlsma/"> linkedin</a></li>
        <li class="contact__buttons"><a class="contact__link--twitter" href="https:twitter.com/johanbijlsma"> twitter</a></li>
        <li class="contact__buttons"><a class="contact__link--github" href="https://github.com/johanbijlsma">github</a></li>
        <li class="contact__buttons"><a class="contact__link--codepen" href="https://codepen.io/johanbijlsma">codepen.io</a></li>
    </ul>


 </div>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {
      msg: 'Reaching out; how to get in touch?',
      body:
        'You can me find online through the following media / places, or get in touch through e-mail 📧  or by phone ☎️.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>