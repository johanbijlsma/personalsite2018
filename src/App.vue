
<template>
  <div id="app">
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
};
</script>

// To load the style.scss file
<style lang="sass">
@import './assets/SCSS/style';
</style>
