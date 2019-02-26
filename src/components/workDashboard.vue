<template>
  <div class="work">
    <h1>Work dashboard</h1>
    <p>An overview of all kinds of experiences, both professional as hobby/side projects. You can read more information about a project by clicking on the "Read more about this project"-button. Then you will be redirected to a detail page, where you can find links to a demo page (or the live version), and (if public) a link to the GIT repo.</p>
    <ExperiencesProfessional></ExperiencesProfessional>
    <ExperiencesHobby></ExperiencesHobby>
    <Codepens></Codepens>
  </div>
</template>

<script>
import ExperiencesHobby from "@/components/experiencesHobby.vue";
import ExperiencesProfessional from "@/components/experiencesProfessional.vue";
import Codepens from "@/components/codepens.vue";
export default {
  name: "experienceDashboard",
  data() {
    return {
      // msg: "Work / Portfolio",
      // body:
      //   "Here's an overview off my work; both professional and hobby projects. For my current employer I've worked on different project for A-level clients such as the NS (Dutch Railways), Noordhoff uitgevers / Ambrasaoft, and Essent. <br/> I also continued to develop myself with some side projects. Those can be found under <b>Hobby</b>.  ",
      // Professional: "Professional",
      // hobby: "Hobby"
    };
  },
  components: {
    ExperiencesHobby: ExperiencesHobby,
    ExperiencesProfessional: ExperiencesProfessional,
    Codepens: Codepens
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
