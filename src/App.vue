
import func from './vue-temp/vue-editor-bridge';
import introVue from './components/intro.vue';
<template>

  <div id="app">
    <nav class="navigation__container">
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

const mobile_nav = document.querySelector('input#toggle_menu');

// window.addEventListener("resize", closeMobileNav);
// function closeMobileNav(){
//   if (mobile_nav.checked == true){
//         mobile_nav.checked = false
//       console.log('closeMobileNav() is afgegaan');
//       }
//       else {
//       console.log('anders niet');

//       }
// }
export default {
  name: 'App',

  watch: {
    '$route' () {
      if (mobile_nav.checked == true){
        mobile_nav.checked = false
      }
    }
  }
};

</script>

// To load the style.scss file
<style lang="sass">
@import './assets/SCSS/style';
</style>
