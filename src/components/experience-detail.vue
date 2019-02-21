<template>
  <div class="experience">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="experience">
      <br>
      <div
        class="header"
        :style="[{
          backgroundImage: `url(${imageUrlFor(experience.poster)})`,
          backgroundPosition: 'top center'
          }
        ]"
      >
        <div class="header-content">
          <h1 >{{experience.title}}</h1>
        </div>
      </div>

      <div class="content">
        <div class="sidebar">
          <p><span class="label"> Experience Type: </span> {{experience.experienceType}}</p>
          <hr>
          <p><span class="label"> Techniques utilised: </span></p>
          <ul class="projects__taxonomy">
              <li v-for="tag in experience.tags" class="tag" :key="tag">
            <span>{{tag}}</span>
            </li>
            </ul>


        </div>

        <div className="main-content">
           <p class="projects__intro">
            {{experience.overview[0].children[0].text}}</p>
            <img
            class="poster"
            :src="imageUrlFor( experience.poster ).ignoreImageParams().width(1000)"
            :alt="`experience poster for ${experience.title}`"
          />
          <br>
            <div class="button--group projects">
              <h2 class="project__links">Links to demo & the repo</h2>
             <a :href="experience.demoUrl" class="projects__externalLink--site">Demo {{experience.title}}</a>
             <a :href="experience.repoUrl" class="projects__externalLink--repo">Git repository {{experience.title}}</a>
            </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import sanity from "../sanity";
// import blocksToHtml from "@sanity/block-content-to-html";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity);

const query = `*[_type == "experience" && _id == $id] {
  _id,
  title,
  period,
  poster,
  tags,
  overview,
  "posterUrl": poster.asset->url,
  demoUrl,
  repoUrl,
  experienceType
}[0]
`;

export default {
  props: {
    id: {
      type: String
    }
  },
  name: "Experience",
  data() {
    return {
      loading: true,
      experience: null
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
      this.error = this.experience = null;
      this.loading = true;

      // const serializers = {
      //   types: {
      //     summaries: props => {
      //       const h = blocksToHtml.h;

      //       if (!props.node.summaries) {
      //         return false;
      //       }

      //       const summariesArray = props.node.summaries.map(summary => {
      //         return h("div", null, [
      //           h("p", null, summary.summary),
      //           h("span", null, "—"),
      //           h("a", { href: summary.url }, summary.author)
      //         ]);
      //       });

      //       return h("div", [
      //         h("h1", null, props.node.caption),
      //         h("div", null, summariesArray)
      //       ]);
      //     }
      //   }
      // };

      sanity.fetch(query, { id: this.id }).then(
        experience => {
          this.loading = false;
          this.experience = experience;
          // this.overviewHtml = blocksToHtml({
          //   blocks: experience.overview,
          //   serializers: serializers,
          //   dataset: sanity.clientConfig.dataset,
          //   projectId: sanity.clientConfig.projectId
          // });
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
.content {
  display: flex;
  flex-direction: column-reverse;
  max-width: 80rem;
  margin: 1rem auto;
  padding: 0 1rem;
}

.overview {
  font-size: 1.5em;
}

.sidebar {
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  flex-grow: 1;
}

.main-content {
  flex-grow: 3;
}

.experience > h2 {
  margin: 2rem 0 0 0;
  padding: 0 0.5rem;
  border-bottom: 1px solid #ccc;
}

.poster {
  display: block;
  width: 100%;
}

.cast-list img {
  width: 2rem;
  height: auto;
  margin: 0.5rem;
  object-fit: cover;
  display: block;
}

.header {
  background-size: cover;
  padding-top: 10rem;
}

.header h1 {
  font-size: 10vmin;
  line-height: 1em;
  margin: 1rem 0 0 0;
  padding: 0;
}

.header > img {
  width: 100%;
  display: block;
}

.header .header-content {
  color: #fff;
  text-align: center;
  padding-top: 5em;
  padding-bottom: 2em;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.9) 90%
  );
}

.cast-list {
  margin: 0;
  padding: 0;
  line-height: 2em;
  margin-bottom: 2rem;
}

.cast-list-item {
  display: block;
  margin: 0;
  padding: 0;
}

.cast-list-link {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid #ccc;
  align-items: center;
  display: flex;
}

.summaries {
  clear: both;
  padding: 2em 0 2em;
}

.summaries :global(ul) {
  margin: 0;
  padding: 0;
}

.summaries :global(li) {
  display: block;
  margin: 0 0 1em;
  padding: 1em 0 2em;
}

.summaries :global(li:not(:last-child)) {
  border-bottom: 1px solid #ccc;
}

.overview :global(figure) {
  margin: 0;
  padding: 0;
}

.overview :global(img) {
  display: block;
  max-width: 100%;
  box-sizing: border-box;
}

@media screen and (max-width: 499px) {
  .cast-character-name::before {
    content: " as ";
  }
}

@media screen and (min-width: 500px) {
  .content {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 2fr 5fr;
    padding: 1rem;
  }

  .overview :global(p) {
    margin-top: 0;
  }

  .cast-list img {
    margin: 0;
    margin-right: 0.5em;
  }

  .cast-list {
    display: grid;
    line-height: 1em;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .cast-list-link {
    border: none;
    align-items: flex-start;
  }

  .cast-person-name {
    display: block;
    font-size: 1.2em;
    font-weight: 500;
    line-height: 1.2em;
  }

  .cast-list-link span {
    display: block;
  }
}

.summaries {
  clear: both;
  padding: 2em 0 2em;
}

.summaries :global(ul) {
  margin: 0;
  padding: 0;
}

.summaries :global(li) {
  display: block;
  margin: 0 0 1em;
  padding: 1em 0 2em;
}

.summaries :global(li:not(:last-child)) {
  border-bottom: 1px solid #ccc;
}

.overview :global(figure) {
  margin: 0;
  padding: 0;
}

.overview :global(img) {
  display: block;
  max-width: 100%;
  box-sizing: border-box;
}

@media screen and (max-width: 499px) {
  .cast-character-name::before {
    content: " as ";
  }
}

@media screen and (min-width: 500px) {
  .content {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 2fr 5fr;
    padding: 1rem;
  }

  .overview :global(p) {
    margin-top: 0;
  }

  .cast-list img {
    margin: 0;
    margin-right: 0.5em;
  }

  .cast-list {
    display: grid;
    line-height: 1em;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .cast-list-link {
    border: none;
    align-items: flex-start;
  }

  .cast-person-name {
    display: block;
    font-size: 1.2em;
    font-weight: 500;
    line-height: 1.2em;
  }

  .cast-list-link span {
    display: block;
  }
  span.label{
    color: rgba(0, 0, 0, 0.5);
  }

  hr{
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.15);
    }
}
</style>
