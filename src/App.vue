
import func from './vue-temp/vue-editor-bridge';
import introVue from './components/intro.vue';
<template>

  <div id="app">
    <nav class="navigation__container">
  <img src="./assets/images/johan.jpg" alt="Johan Bijlsma" class="header-photo"> <h1>Johan Bijlsma</h1>
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
    <div class="header__container">
      <div class="header__container--buttons"><ol>
        <li>close button</li>
        <li>minimize button</li>
        <li>fullscreen button</li>
      </ol></div>
          <h1 class="pageheader">johan bijlsma</h1>
    </div>

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
  },
};

</script>

// To load the style.scss file
<style lang="sass">
@import './assets/SCSS/style';
</style>
