// app
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
// global style
import './global.css'

// router
import {router} from "./router";
app.use(router)

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

app.mount('#app')
