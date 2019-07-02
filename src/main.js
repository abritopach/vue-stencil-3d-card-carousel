import Vue from 'vue'
import App from './App.vue'

import { defineCustomElements, applyPolyfills } from 'st-three-dimensional-card-carousel/loader';

Vue.config.productionTip = false

// tell Vue to ignore all components defined in the test-components
// package. The regex assumes all components names are prefixed
// 'test'
Vue.config.ignoredElements = [/st-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements(window);
});

new Vue({
  render: h => h(App),
}).$mount('#app')
