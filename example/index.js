import Vue from 'vue'
import Router from 'vue-router'

import App from '@/App'
import Main from '@/pages/Main.vue'

import '@/assets/style.css' // Specific stylesheet for the Example
import 'hf-element-ui/index.css' // Import styling for custom hf-element-ui components (Action button, CollapsibleHeader..)

import registerElementUIComponents from './elementUI'
import { RetryNotificationPlugin } from 'hf-element-ui'

registerElementUIComponents(Vue)
Vue.use(RetryNotificationPlugin)
Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', component: Main }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')