import { createApp } from 'vue'
import App from './App.vue'
// Import V-Calneder Plugin 
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

// bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// Import Pinia for State management 
import { createPinia } from 'pinia'
import './registerServiceWorker'
import router from './router'
import './styles/global.css'

const pinia = createPinia();

createApp(App).use(router).use(VCalendar, {}).use(pinia).mount('#app')
