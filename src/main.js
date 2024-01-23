import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from './store'

// create a const to run the createStore function
const store = createStore();

// create a const to create the App
const app = createApp(App);
// add the store to the app
app.use(store);
// mount the app
app.mount('#app');