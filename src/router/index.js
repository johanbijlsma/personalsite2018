import Vue from 'vue';
import Router from 'vue-router';
import intro from '@/components/intro';
import contact from '@/components/contact';
import work from '@/components/work';
import movies from '@/components/movies-example';
import Experiences from '@/components/experiences';
// import movie from '@/components/movie-detail';
import NotFound from '@/components/notFound';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'intro',
      component: intro,
    },
    {
      path: '/work',
      name: 'work',
      component: work,
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact,
    },
    {
      path: '/movies',
      name: 'movies',
      component: movies,
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: () =>
      import(/* webpackChunkName: "movie" */ '@/components/movie-detail.vue'),
      props: route => ({ id: route.params.id }),
    },
    {
      path: '/work2',
      name: 'experiences',
      component: Experiences,
    },
    {
      path: '/experience/:id',
      name: 'experience',
      component: () =>
      import(/* webpackChunkName: "movie" */ '@/components/experience-detail.vue'),
      props: route => ({ id: route.params.id }),
    },
    {
      path: '/404',
      component: NotFound,
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});
