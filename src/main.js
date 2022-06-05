import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入初始化CSS
import '@/assets/css/init_css.css'

createApp(App).use(store).use(router).mount('#app')
