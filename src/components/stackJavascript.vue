
<template>
  <div>
    <div class="loading" v-if="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <h2 class="stack">JavaScript Frameworks & Libraries</h2>
    <ul class="list stack">
      <!-- <li v-for="item in stack" class="list__item stack projects__link" :key="item._id">
        <h3 class="projects__title">{{item.title}}</h3>
        <br>
        <img
          class="projects__img"
          v-if="item.techLogo"
          :src="imageUrlFor(item.techLogo).ignoreImageParams().width(500)"
        >
        <p class="projects__intro">{{item.overview[0].children[0].text}}</p>
      </li>-->
      <li v-for="item in stackJavascript" class="list__item stack" :key="item._id">
        <img
          class="projects__img"
          v-if="item.techLogo"
          :src="imageUrlFor(item.techLogo).ignoreImageParams().width(100)"
        >
        <span class="techniqueName">{{item.techName}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import sanity from "../sanity";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity);

const query = `*[_type == "stack" && stackType == "javascript"] {
  stackType,
  techName,
  techLogo,
}[0...50]`;

export default {
  props: {
    id: {
      type: String
    }
  },
  name: "TechStackJavascript",
  data() {
    return {
      loading: true,
      stackJavascript: []
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
        stackJavascript => {
          this.loading = false;
          this.stackJavascript = stackJavascript;
        },
        error => {
          this.error = error;
        }
      );
    }
  }
};

// const queryHobby = `*[_type == "experience" && experienceType == !"professional"] {
//   experienceType,
//   period,
//   _id,
//   slug,
//   title,
//   poster,
//   overview,
// }[0...50]`;

// export default {
//   props: {
//     id: {
//       type: String
//     }
//   },
//   name: "Experiences",
//   data() {
//     return {
//       loading: true,
//       experiencesHobby: []
//     };
//   },
//   created() {
//     this.fetchData();
//   },
//   watch: {
//     $route: "fetchData"
//   },
//   methods: {
//     imageUrlFor(source) {
//       return imageBuilder.image(source);
//     },
//     fetchData() {
//       this.error = this.post = null;
//       this.loading = true;
//       sanity.fetch(query).then(
//         experiences => {
//           this.loading = false;
//           this.experiences = experiences;
//         },
//         error => {
//           this.error = error;
//         }
//       );
//     },
//   }
// };
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
