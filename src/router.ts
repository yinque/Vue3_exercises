import Home from "./pages/Home.vue";
import StateTest from "./pages/StateTest.vue";
import DraggableDemo from "./pages/draggable/DraggableDemo.vue";

const routes = [
    {path: '/Home', component: Home},
    {path: '/', component: Home},
    {path: '/StateTest', component: StateTest},
    {path: '/draggable/DraggableDemo', component: DraggableDemo},
]


import { createRouter, createWebHistory } from 'vue-router';
export const router = createRouter({
    history: createWebHistory(),
    routes,
})