import Vue from 'vue'
import App from './App.vue'
import ColorDirective from './color';
import List from './List.vue';

Vue.component('app-list', List);
Vue.directive('colored', ColorDirective);
Vue.filter('uppercase', function(val) {
  return val.toUpperCase();
});

export const eventEmitter = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
