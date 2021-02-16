import { createApp } from 'vue'
import { createHead } from '@vueuse/head'

import 'windi.css'

import App from './App.vue'

createApp(App).use(createHead()).mount('#app')
