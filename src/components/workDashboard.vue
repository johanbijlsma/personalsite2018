<template>
  <div class="work">
    <h1>Work dashboard</h1>
    <p>An overview of all kinds of experiences, both professional as hobby/side projects</p>
 <ExperiencesProfessional></ExperiencesProfessional>
 <ExperiencesHobby></ExperiencesHobby>
 </div>
</template>

<script>
import ExperiencesHobby from '@/components/experiencesHobby.vue';
import ExperiencesProfessional from '@/components/experiencesProfessional.vue';
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
    'ExperiencesHobby': ExperiencesHobby,
    'ExperiencesProfessional': ExperiencesProfessional
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
