import Vue from 'vue';
import Router from 'vue-router';
import intro from '@/components/intro';
import contact from '@/components/contact';
import experienceDashboard from '@/components/workDashboard';
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
      // component: work,
      redirect: '/workoverview',
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact,
    },
    {
      path: '/experience/:id',
      name: 'experience',
      component: () => import('@/components/experience-detail.vue'),
      props: route => ({ id: route.params.id }),
    },
    {
      path: '/workoverview',
      name: 'experienceDashboard',
      component: experienceDashboard,
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
