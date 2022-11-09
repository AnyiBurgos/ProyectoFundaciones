import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'
import LoadScript from 'vue-plugin-load-script';


createApp(App).use(router,LoadScript).mount('#app')

