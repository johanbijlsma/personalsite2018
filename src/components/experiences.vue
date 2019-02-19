
<template>
  <div>
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <ul class="list projects">
      <li v-for="exp in experiences" class="list__item professional projects__link" :key="exp._id">
            <h3 class="projects__title">{{exp.title}} - {{exp._id}}</h3>
          <img class="projects__img" v-if="exp.poster" :src="imageUrlFor(exp.poster).ignoreImageParams().width(240)"/>
          <p class="projects__intro">
            {{exp.overview[0].children[0].text}}</p>



        <router-link :to="{name: 'experience', params: {id: exp._id}}">
more info 💩
            <!-- <div>
            <div>{{exp.releaseDate.substr(0, 4)}}</div>
            <span v-if="exp.director" class="exps-list__directed-by">
              Directed by {{exp.director}}
            </span>
          </div> -->
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import sanity from "../sanity";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity);

const query = `*[_type == "experience"] {
  _id,
  slug,
  title,
  period,
  poster,
  overview,
}[0...50]`;

export default {
  props: {
    id: {
      type: String
    }
  },
  name: "Experiences",
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

<style scoped>
.list {
  margin: 1rem;
}

.movies-list__directed-by {
  display: block;
  font-size: 1rem;
}
</style>

// export default {
//   name: "movies",
//   data() {
//     return {
//       msg: 'Stack',
//       body:
//         'HTML5, CSS3, (vanilla) JavaScript, AngularJS, Angular2, VueJS, React, Sass, Webpack, NPM, Gulp, Grunt, Git, Jekyll, Jenkins, Bamboo, Bootstrap, jQuery, Photoshop, Illustrator & Sketch. <br /> <br/> Further experienced in styling projects in Django, Wordpress, Jekyll, or custom build on PHP, .Net and Java. Currently my editor off choice is VS Code, and I enjoy Hyper terminal everyday on my Mac',
//     };
//   }
// };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
