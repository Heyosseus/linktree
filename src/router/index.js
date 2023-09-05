import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieQuotes from '../components/modals/MovieQuotes.vue'
import CovidQuestionnaire from '../components/modals/CovidQuestionnaire.vue'
import FortchainFinance from '../components/modals/FortchainFinance.vue'
import CoronaTime from '../components/modals/CoronaTime.vue'
import CVGenerator from '../components/modals/CVGenerator.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/movie-quotes',
          name: 'movie-quotes',
          component: MovieQuotes
        },
        {
          path: '/covid-questionnaire',
          name: 'covid-questionnaire',
          component: CovidQuestionnaire
        },
        {
          path: '/fortchain-finance',
          name: 'fortchain-finance',
          component: FortchainFinance
        },
        {
          path: '/corona-time',
          name: 'corona-time',
          component: CoronaTime
        },
        {
          path: '/cv-generator',
          name: 'cv-generator',
          component: CVGenerator
        }
      ]
    }
  ]
})

export default router
