import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MyKit from '../packages';
import router from './router'
import Preview from './components/Preview.vue';
const app = createApp(App);
app.component('Preview', Preview)
app.use(MyKit);
app.use(router);
app.mount('#app');
