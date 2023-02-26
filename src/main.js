import { createApp } from 'vue'

import router from './router.js';
import store from './store/index.js';
import App from './App.vue'
// global components
import BaseCard from './components/ui/BaseCard.vue';

const app = createApp(App);

app.use(router);
app.use(store);

// register components
app.component('base-card', BaseCard);

app.mount('#app');