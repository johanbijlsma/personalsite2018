<template>
  <div class="work">
    <h1>{{ msg }}</h1>
    <p v-html="body"></p>
    <h2>{{Professional}}</h2>
    <ul class="projects">
        <li class="professional projects__link"><p class="projects__title">Ctrack Carsharing web admin</p>
          <p class="projects__intro"><img class="projects__img" src="../../static/Ctrack.png" />Together with 2 Python developers we've build a Web admin for a B2B web app. The app can be used by companies who need to manage their car fleet.</p>

          <ul class="projects__taxonomy">
            <li class="tag"><span>Django Back-end</span></li>
            <li class="tag"><span>Sass</span></li>
            <li class="tag"><span>Bootstrap</span></li>
            <li class="tag"><span>JavaScript</span></li>
            <li class="tag"><span>jQuery</span></li>
            <li class="tag"><span>Gulp</span></li>
            <li class="tag"><span>GIT</span></li> 

          </ul>
          </li>
          <li class="professional projects__link"><p class="projects__title">NS Businesscard order flow</p>
          <p class="projects__intro"><img class="projects__img" src="../../static/NS-Businesscard.png" />Worked at the main office off the NS in te Business team where I built an Angular 2 app for new customers to order a Businesscard. During this project I was resposible for the look and feel off the app. </p>
          <a href="https://www.ns.nl/businesscardaanvragen/#/" class="projects__externalLink--site">Businesscard aanvragen</a>

          <ul class="projects__taxonomy">
            <li class="tag"><span>Angular 2</span> </li>
            <li class="tag"><span>Sass</span></li>
            <li class="tag"><span>Bootstrap</span></li>
            <li class="tag"><span>SVN</span></li>
            <li class="tag"><span>Gulp</span></li>
            <li class="tag"><span>GIT</span></li>

          </ul>
          </li>
                <li class="professional projects__link"><p class="projects__title">Ambrasoft resultatenmonitor</p>
          <p class="projects__intro"><img class="projects__img projects__img--extra-padding" src="../../static/resultatenmonitor.png" />Ambrasoft is the creator of learning software for kids in primary school, in which they can practice their math, or as an example theire grammar. All those different courses where lacking an overview page for teacher to see the results off pupils. We've built an AngularJS webapp that made this possible. In this project I was responsible for styling the front-end. </p>
          <ul class="projects__taxonomy">
            <li class="tag"><span>AngularJS</span> </li>
            <li class="tag"><span>Sass</span></li>
            <li class="tag"><span>TFS</span></li>
            <li class="tag"><span>Gulp</span></li>
          </ul>
          </li>
                <li class="professional projects__link"><p class="projects__title">Essent verbruiksmanager</p>
          <p class="projects__intro"><img class="projects__img projects__img--extra-padding" src="../../static/essentlogo.jpg" />On this project I build a AngularJS webapp where Essent customers could check if they would get money back at the end of the year or have to pay extra because they had used more energy than expected. For this project I was responsible for the styling of the front-end. </p>
          <ul class="projects__taxonomy">
            <li class="tag"><span>AngularJS</span> </li>
            <li class="tag"><span>Sass</span></li>
            <li class="tag"><span>GIT</span></li>


          </ul>
          </li>
    </ul> 

    <h2>{{hobby}}</h2>
  <ul class="projects">
        <li class="hobby projects__link"><p class="projects__title">Fysiokolster.nl</p>
        <p class="projects__intro"><img class="projects__img" src="../../static/fysiokolster.png" />	When my wife started her physiotherapy practice i've made the website  using Jekyll. I really like working with a Static Site Generator such as Jekyll because you have the ability to use the logic of a CMS while developing, and then just build it and upload the Dist folder.  </p>
                   <a href="https://www.fysiokolster.nl" class="projects__externalLink--site">FysioKolster</a>
                   <a href="https://www.fysiokolster.nl" class="projects__externalLink--repo">FysioKolster</a>

          <ul class="projects__taxonomy">
            <li class="tag"><span>Jekyll</span> </li>
            <li class="tag"><span>Sass</span></li>
            <li class="tag"><span>Bootstrap</span></li>
            <li class="tag"><span>jQuery</span></li>
            <li class="tag"><span>GIT</span></li>

          </ul></li>
        <li class="hobby projects__link"><p class="projects__title"> Angularcards</p><p class="projects__intro"><img class="projects__img" src="../../static/angularcards.png" />	As an exercise to better learn AngularJS, I’ve build a bogus web app  which let you create “cards”. You can choose an aspect-ratio, whether you want rounded corners or not, a colour, a background image, your preferred font and your text, and the card gets generated.  </p>
             <a href="https://johanbijlsma.github.io/angularcards/" class="projects__externalLink--site">Angularcards</a>
              <a href="https://www.fysiokolster.nl" class="projects__externalLink--repo">FysioKolster</a>

          <ul class="projects__taxonomy">
            <li class="tag"><span>AngularJS</span> </li>
            <li class="tag"><span>Sass</span></li>
            <li class="tag"><span>Bootstrap</span></li>
            <li class="tag"><span>Gulp</span></li>
            <li class="tag"><span>GIT</span></li>
            <li class="tag"><span>Github Pages</span></li>


          </ul></li>
        <li class="hobby projects__link"><p class="projects__title"> 2015 Portfolio</p><p class="projects__intro"><img class="projects__img" src="../../static/portfolio2015.png" />To demonstrate my earlier work and experience I’ve build my 2015 portfolio. This is build with Sass with Compass and plain HTML5, jQuery and is hosted on Github Pages.</p>
           <a href="https://johanbijlsma.github.io/angularcards/" class="projects__externalLink--site">Angularcards</a>
              <a href="https://www.fysiokolster.nl" class="projects__externalLink--repo">FysioKolster</a>

          <ul class="projects__taxonomy">
            <li class="tag"><span>Sass (with Compass)</span></li>
            <li class="tag"><span>GIT</span></li>
            <li class="tag"><span>Github Pages</span></li>

          </ul></li>
        <li class="hobby projects__link"><p class="projects__title"> RWD-iframe</p><p class="projects__intro"><img class="projects__img projects__img--extra-padding" src="../../static/rwd-iframe.gif" />To solve a Responsive problem for a client I’ve made a Github repo on styling Iframes, in which I made this solution. The table is in the iframe, and media-queries are set on both the iframe as on the page  in which the iframe is embedded. On the smallest breakpoint, users will get a link to the content, in stead of a table that is to small to read. </p>
          <a href="https://johanbijlsma.github.io/RWD-iframe/" class="projects__externalLink--site">RWD-iframe</a>
              <a href="https://www.fysiokolster.nl" class="projects__externalLink--repo">FysioKolster</a>

          <ul class="projects__taxonomy">
            <li class="tag"><span>Sass (with Compass)</span></li>
            <li class="tag"><span>GIT</span></li>
            <li class="tag"><span>Github Pages</span></li>
          </ul></li>
        <li class="hobby projects__link"><p class="projects__title"> my Codepen profile</p><p class="projects__intro"><img class="projects__img" src="../../static/codepen.png" />	When solving smaller problems, or just for making one-offs small projects, I love using Codepen. It’s a online coding environment where you write HTML, CSS and JavaScript for building small experiements.</p>
          <a href="https://codepen.io/johanbijlsma" class="projects__externalLink--site">My Codepen Profile</a>
    </li></ul> 
 </div>
</template>

<script>
export default {
  name: "work",
  data() {
    return {
      msg: "Work / Portfolio",
      body:
        "Here's an overview off my work; both professional and hobby projects. For my current employer I've worked on different project for A-level clients such as the NS (Dutch Railways), Noordhoff uitgevers / Ambrasaoft, and Essent. <br/> I also continued to develop myself with some side projects. Those can be found under <b>Hobby</b>.  ",
      Professional: "Professional",
      hobby: "Hobby"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>  
