
import func from './vue-temp/vue-editor-bridge';
import introVue from './components/intro.vue';
<template>

  <div id="app">
    <nav class="navigation__container">
      <div class="navigation__title" v-scroll-class>
      <router-link :to="{ name: 'intro' }" ><h1>Johan Bijlsma</h1>
  <img  src="./assets/images/johan.jpg" alt="Johan Bijlsma" class="header-photo" >
  </router-link>
      </div>
      <form name="menu">
        <input type="checkbox" name="" id="toggle_menu">
        <label for="toggle_menu">Menu</label>
      <ul class="menu ">
        <li class="navigation__container--links"><router-link :to="{ name: 'intro' }" exact> Home</router-link></li>
        <li class="navigation__container--links"><router-link :to="{ name: 'work' }" >Work / Portfolio</router-link></li>
        <li class="navigation__container--links"><router-link :to="{ name: 'contact' }" >Contact  </router-link></li>
      </ul>

      </form>
    </nav>
       <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  watch: {
    '$route'() {
      if (document.querySelector('#toggle_menu').length > 0) {
        console.log('Mobile_nav was not found...');
        }
      else {
        document.querySelector('#toggle_menu').checked = false;
        console.log('$route is triggered, and mobile nav closes...  ');
      }
    },
  }
};

</script>

// To load the style.scss file
<style lang="sass">
@import './assets/SCSS/style';
</style>
