import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from '@/plugins/router.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import Navbar from '@/components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';

createApp(App)
    .use(router)
    .component('Navbar', Navbar)
    .component('Sidebar', Sidebar)
    .mount('#app')