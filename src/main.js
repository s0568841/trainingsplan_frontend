import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from '@/plugins/router.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

createApp(App).use(router).mount('#app')