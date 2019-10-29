/* eslint-disable */
import Vue from 'vue';
import App from './App.vue';
import SComponents from '../dist/seven-view';

Vue.config.productionTip = false;

Vue.use(SComponents);
new Vue({
  render: h => h(App)
}).$mount('#app');
