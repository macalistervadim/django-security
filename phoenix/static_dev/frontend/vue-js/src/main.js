import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // подключение роутера (если используется)

createApp(App)
  .use(router)  // использование роутера (если используется)
  .mount('#app');
