import DraggableDemo from "./pages/draggable/DraggableDemo.vue";
import Home from "./pages/Home.vue";
import SlotTest from "./pages/slot/SlotTest.vue";
import StateTest from "./pages/StateTest.vue";

const routes = [
	{path: '/', component: Home},
	{path: '/draggable/DraggableDemo', component: DraggableDemo},
	{path: '/Home', component: Home},
	{path: '/slot/SlotTest', component: SlotTest},
	{path: '/StateTest', component: StateTest},
]

import { createRouter, createWebHistory } from 'vue-router';
export const router = createRouter({
    history: createWebHistory(),
    routes,
})
