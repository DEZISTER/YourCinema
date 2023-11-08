import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/pages/MainPage.vue';
import MovieIdPage from '@/pages/MovieIdPage.vue';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: MainPage,
      meta: {auth: true}
    },
    {
      path: '/signUp',
      component: SignUp,
    },
    {
      path: '/signIn',
      component: SignIn,
    },
    {
      path: '/movies/:id',
      component: MovieIdPage,
      meta: {auth: true}
    },
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = JSON.parse(localStorage.getItem("AuthStatus"));
  const requireAuth = to.matched.some(record => record.meta.auth)

  if(requireAuth && currentUser !== true) {
    next('/signIn')
  } else {
    next()
  }
})

export default router
