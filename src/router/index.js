import Vue from 'vue';
import Router from 'vue-router';
import intro from '@/components/intro';
import contact from '@/components/contact';
import work from '@/components/work';
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
      path: '/404',
      component: NotFound,
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});
