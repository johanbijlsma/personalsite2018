<template>
  <div class="contact">
    <h1>{{ msg }}</h1>
    <p v-html="body"></p>
    <ul>
        <li class="contact__buttons">linkedin</li>
        <li class="contact__buttons">twitter</li>
        <li class="contact__buttons">github</li>
        <li class="contact__buttons">codepen.io</li>
    </ul>
linkedin (https://www.linkedin.com/in/johanbijlsma/  )
twitter (https:twitter.com/johanbijlsma) 
github
codepen.io

 </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      msg: "Reaching out; how to get in touch?",
      body:
        "You can me find online through the following media / places, or get in touch through e-mail 📧  or by phone ☎️."
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>  
