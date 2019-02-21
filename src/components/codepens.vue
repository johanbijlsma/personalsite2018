
<template>
  <div>
    <div class="loading" v-if="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <h2 class="hobby">My Selected Codepens</h2>
    <ul class="projects codepen">
      <li v-for="exp in experiences" class="list__item codepen projects__link" :key="exp._id">
        <h3 class="projects__title">{{exp.title}}</h3>
        <ul class="projects__taxonomy">
          <li v-for="tag in exp.tags" class="tag" :key="tag">
            <span>{{tag}}</span>
          </li>
        </ul>
        <p v-html="exp.codepen_embed"></p>
      </li>
    </ul>
  </div>
</template>

<script>
import sanity from "../sanity";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity);

const query = `*[_type == "experience" && experienceType == "codepen"] {
  experienceType,
  period,
  _id,
  slug,
  title,
  poster,
  tags,
  codepen_embed
}[0...50]`;

export default {
  props: {
    id: {
      type: String
    }
  },
  name: "ExperiencesHobby",
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

