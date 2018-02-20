
import introVue from './components/intro.vue';
<template>
  <div id="app">
    <nav class="navigation__container">
      <ul>
        <li class="navigation__container--links"><router-link :to="{ name: 'intro' }" exact>Home</router-link></li>
        <li class="navigation__container--links"><router-link :to="{ name: 'work' }">Work / Portfolio</router-link></li>
        <li class="navigation__container--links"><router-link :to="{ name: 'contact' }">Contact  </router-link></li>
      </ul>
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
  name: 'App'
  };
</script>

// To load the style.scss file
<style lang="sass">
@import './assets/SCSS/style';
</style>
