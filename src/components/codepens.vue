
<template>
  <div>
    <div class="loading" v-if="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <h2 class="hobby">My Selected Codepens</h2>
    <ul class="projects codepen">
      <li v-for="pen in codepens" class="list__item codepen projects__link" :key="pen._id">
        <h3 class="projects__title">{{pen.title}}</h3>
        <div class="codepen-tag_link-container">
          <ul class="projects__taxonomy">
            <li v-for="tag in pen.tags" class="tag" :key="tag">
              <span>{{tag}}</span>
            </li>
          </ul>
          <a class="projects__externalLink--more" :href="pen.demoUrl">Visit this on Codepen</a>
        </div>
        <p v-html="pen.codepen_embed"></p>
      </li>
    </ul>
  </div>
</template>

<script>
import sanity from "../sanity";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity);

const query = `*[_type == "codepen"] {
  experienceType,
  period,
  _id,
  slug,
  title,
  screenshot,
  tags,
  demoUrl,
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
      codepens: []
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
        codepens => {
          this.loading = false;
          this.codepens = codepens;
        },
        error => {
          this.error = error;
        }
      );
    }
  }
};
</script>

