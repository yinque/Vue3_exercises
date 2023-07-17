// app
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
// global style
import './global.css'

// router
import {router} from "./router";
app.use(router)

app.mount('#app')
