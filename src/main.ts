import { createApp, ref } from 'vue'
import App from './App.vue';
import pinia from './store';
import router from './router';
import i18n from './locales';
import 'animate.css';
import ECharts from 'vue-echarts';
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App);

app.component('v-chart', ECharts);
app.use(pinia);
app.use(router);
app.use(i18n);

app.mount('#app');
