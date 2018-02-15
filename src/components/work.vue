<template>
  <div class="work">
    <h1>{{ msg }}</h1>
    <p v-html="body"></p>
    <h2>{{Professional}}</h2>
    <ul>
        <li class="professional projects">Ctrack Carsharing web admin</li>
        <li class="professional projects"> NS Businesscard order flow</li>
        <li class="professional projects"> Essent verbruiksmanager</li>
        <li class="professional projects"> Ambrasoft resultatenmonitor</li>
    </ul> 

    <h2>{{hobby}}</h2>
  <ul>
        <li class="hobby projects">Fysiokolster.nl</li>
        <li class="hobby projects"> Angularcards</li>
        <li class="hobby projects"> 2015 Portfolio</li>
        <li class="hobby projects"> RWD-iframe</li>
        <li class="hobby projects"> my Codepen profile</li>
    </ul> 
 </div>
</template>

<script>
export default {
  name: "work",
  data() {
    return {
      msg: 'Work / Portfolio',
      body: 'Here\'s an overview off my work; both professional and hobby projects. For my current employer I\'ve worked on different project for A-level clients such as the NS (Dutch Railways), Noordhoff uitgevers / Ambrasaoft, and Essent. <br/> I also continued to develop myself with some side projects, that are under <b>Hobby</b>.  ', 
    Professional: 'Professional',
    hobby: 'Hobby'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>  
