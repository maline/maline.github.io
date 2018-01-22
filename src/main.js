import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HomeView from './components/Home'
import PortfolioView from './components/Portfolio'


// install router
// Vue.use(VueRouter)
//
// const routes = [
//   { path: '/home', component: HomeView },
//   { path: '/portfolio', component: PortfolioView }
// ]
//
// const router = new VueRouter({
//   routes // short for `routes: routes`
// })

new Vue({
  el: '#app',
  // router,
  render: h => h(App)
})
