import { createRouter, createWebHistory } from 'vue-router';
import NotFoundView from '../views/NotFoundView.vue';
import EventListView from '../views/EventListView.vue';
import EventDetailsView from '../views/EventDetailsView.vue';
import AboutView from '../views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)',
      name: 'NotFoundView',
      component: NotFoundView,
    },
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true,
      component: EventDetailsView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
});

export default router;
