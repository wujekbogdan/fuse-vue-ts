import Vue from 'vue';
import App from './components/App.vue';
import './scss/app.scss';

new Vue({
  el: '#js--app',
  render (createElement) {
    return createElement(App);
  },
});
