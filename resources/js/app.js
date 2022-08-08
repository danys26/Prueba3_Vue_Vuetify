require('./bootstrap');

window.Vue = require('vue');

import Vuetify from "../plugins/vuetify"

Vue.component('componente1-index', require('./components/Componente1/index.vue').default);

const app = new Vue({
    vuetify:Vuetify,
    el: '#app'
});
