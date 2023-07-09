import { createApp } from 'vue';
import '@/style.css';
import App from '@/App.vue';
import router from '@/plugins/router.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Navbar from '@/components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';

const app = createApp(App);

const eventBus = createApp({}); // Create separate Vue instance as event bus
app.config.globalProperties.eventBus = eventBus.config.globalProperties.eventBus; // Update this line

app.component('Navbar', Navbar);
app.component('Sidebar', Sidebar);
app.use(router).mount('#app');