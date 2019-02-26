<template>
  <section class="homepage">
    <div class="header__container">
      <div class="header__container--buttons">
        <ol>
          <li>close button</li>
          <li>minimize button</li>
          <li>fullscreen button</li>
        </ol>
      </div>
      <h1 class="pageheader">johan bijlsma</h1>
    </div>
    <div class="intro">
      <h1>{{ msg }}</h1>
      <p v-html="body"></p>
    </div>

    <div class="stack">
      <h2>{{stackMsg}}</h2>
      <p v-html="stackBody"></p>
    </div>
    <TechStackBasic></TechStackBasic>
    <TechStackJavascript></TechStackJavascript>
    <TechStackStaticSiteGenarator></TechStackStaticSiteGenarator>
    <TechStackOnlineTools></TechStackOnlineTools>
    <TechStackDesignTools></TechStackDesignTools>
    <TechStackTaskrunnersBundler></TechStackTaskrunnersBundler>
    <section class="offline">
      <div class="offline">
        <h2>{{offlineMsg}}</h2>
        <p v-html="offlineBody"></p>
      </div>
    </section>
  </section>
</template>

<script>
import TechStackBasic from "@/components/stackBasic.vue";
import TechStackJavascript from "@/components/stackJavascript.vue";
import TechStackStaticSiteGenarator from "@/components/stackStaticSiteGenerator.vue";
import TechStackDesignTools from "@/components/stackDesignTool.vue";
import TechStackOnlineTools from "@/components/stackOnlineTool.vue";
import TechStackTaskrunnersBundler from "@/components/stackTaskrunner.vue";

export default {
  name: "intro",
  data() {
    return {
      msg: "Creative Front-end Developer",
      body:
        'A creative front-end dev who loves building out cool projects together with a team. Based in Gouda, The Netherlands, I work for a local company specialised in Microsoft services and Consulting called <a href="https://sharevalue.nl" target="_blank"> ShareValue</a>, where I joined the Front-end team in June off 2018.  I really love working on the look and feel part off a site or application. <br /><br /> Please feel free to browse through both my professional and my hobby projects under <a href="#/work">#work</a>. If you would like to reach out and contact me; you can find more info under <a href="#/contact">#contact</a>.',
      stackMsg: "Stack",
      stackBody:
        "I have experience with loads of techniques, tools and languages. You can see them all below. Currently my editor of choice is VS Code, and I enjoy Hyper terminal everyday on my Mac.",
      offlineMsg: "Offline",
      offlineBody: `When not working or coding, I really like hiking outdoors (last year went on a "4e Musketier Karakterweekend" to Scotland together with my younger brother Anne), and I'm also halfway on walking the entire Pieterpad.`
    };
  },
  components: {
    TechStackBasic: TechStackBasic,
    TechStackJavascript: TechStackJavascript,
    TechStackStaticSiteGenarator: TechStackStaticSiteGenarator,
    TechStackDesignTools: TechStackDesignTools,
    TechStackOnlineTools: TechStackOnlineTools,
    TechStackTaskrunnersBundler: TechStackTaskrunnersBundler
    // ExperiencesProfessional: ExperiencesProfessional,
    // Codepens: Codepens
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
