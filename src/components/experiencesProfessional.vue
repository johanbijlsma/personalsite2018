
<template>
  <div>
    <div class="loading" v-if="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>
    <h2 class="professional">Professional Projects</h2>
    <ul class="list projects">
      <li v-for="exp in experiences" class="list__item professional projects__link" :key="exp._id">
        <h3 class="projects__title">{{exp.title}}</h3>
        <br>
        <img
          class="projects__img"
          v-if="exp.poster"
          :src="imageUrlFor(exp.poster).ignoreImageParams().width(500)"
        >
        <p class="projects__intro">{{exp.overview[0].children[0].text}}</p>

        <router-link
          class="projects__externalLink--more"
          :to="{name: 'experience', params: {id: exp._id}}"
        >Read more about this project</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import sanity from "../sanity";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity);

const query = `*[_type == "experience" && experienceType == "professional"] {
  experienceType,
  period,
  _id,
  slug,
  title,
  poster,
  overview,
}[0...50]`;

export default {
  props: {
    id: {
      type: String
    }
  },
  name: "ExperiencesProfessional",
  data() {
    return {
      loading: true,
      experiences: []
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      sanity.fetch(query).then(
        experiences => {
          this.loading = false;
          this.experiences = experiences;
        },
        error => {
          this.error = error;
        }
      );
    }
  }
};
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
