<template>
  <div class="work">
    <h1>{{ msg }}</h1>
    <p v-html="body"></p>
    <h2>{{Professional}}</h2>
    <ul class="projects">
        <li class="professional projects__link"><p class="projects__title">Ctrack Carsharing web admin</p>
          <p class="projects__intro"><figure class="projects__img"></figure>Together with 2 Python developers we've build a Web admin for a B2B web app.</p>
          <ul class="projects__taxonomy">
            <li class="tag"><span>Django Back-end</span></li>
            <li class="tag"><span>Sass</span></li>
            <li class="tag"><span>Bootstrap</span></li>
            <li class="tag"><span>JavaScript</span></li>
            <li class="tag"><span>jQuery</span></li>
            <li class="tag"><span>Gulp</span></li>

          </ul>
          </li>
          <li class="professional projects__link"><p class="projects__title">NS Businesscard order flow</p>
          <p class="projects__intro"><figure class="projects__img"></figure>Worked at the main office off the NS in te Business team where I built an Angular 2 app for new customers to order a Businesscard. During this project I was resposible for the look and feel off the app. </p>
          <ul class="projects__taxonomy">
            <li class="tag"><span>Angular 2</span> </li>
            <li class="tag"><span>Sass</span></li>
            <li class="tag"><span>Bootstrap</span></li>
            <li class="tag"><span>JavaScript</span></li>
            <li class="tag"><span>jQuery</span></li>
            <li class="tag"><span>Gulp</span></li>

          </ul>
          </li>
                <li class="professional projects__link"><p class="projects__title">Essent verbruiksmanager</p>
          <p class="projects__intro"><figure class="projects__img"></figure>Worked at the main office off the NS in te Business team where I built an Angular 2 app for new customers to order a Businesscard. During this project I was resposible for the look and feel off the app. </p>
          <ul class="projects__taxonomy">
            <li class="tag"><span>Angular 2</span> </li>
            <li class="tag"><span>Sass</span></li>
            <li class="tag"><span>Bootstrap</span></li>
            <li class="tag"><span>JavaScript</span></li>
            <li class="tag"><span>jQuery</span></li>
            <li class="tag"><span>Gulp</span></li>

          </ul>
          </li>
                <li class="professional projects__link"><p class="projects__title">Ambrasoft resultatenmonitor</p>
          <p class="projects__intro"><figure class="projects__img"></figure>Worked at the main office off the NS in te Business team where I built an Angular 2 app for new customers to order a Businesscard. During this project I was resposible for the look and feel off the app. </p>
          <ul class="projects__taxonomy">
            <li class="tag"><span>Angular 2</span> </li>
            <li class="tag"><span>Sass</span></li>
            <li class="tag"><span>Bootstrap</span></li>
            <li class="tag"><span>JavaScript</span></li>
            <li class="tag"><span>jQuery</span></li>
            <li class="tag"><span>Gulp</span></li>

          </ul>
          </li>
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
      msg: "Work / Portfolio",
      body:
        "Here's an overview off my work; both professional and hobby projects. For my current employer I've worked on different project for A-level clients such as the NS (Dutch Railways), Noordhoff uitgevers / Ambrasaoft, and Essent. <br/> I also continued to develop myself with some side projects, that are under <b>Hobby</b>.  ",
      Professional: "Professional",
      hobby: "Hobby"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>  
