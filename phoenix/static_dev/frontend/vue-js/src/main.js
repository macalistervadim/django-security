import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // подключение роутера (если используется)
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App)
  .use(router)  // использование роутера (если используется)
  .mount('#app');
