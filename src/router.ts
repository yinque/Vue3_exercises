import AtTest from "./pages/AtTest.vue";
import ContextMenuTest from "./pages/components/ContextMenuTest.vue";
import DialogTest from "./pages/components/DialogTest.vue";
import DraggableDemo from "./pages/draggable/DraggableDemo.vue";
import Home from "./pages/Home.vue";
import SlotTest from "./pages/slot/SlotTest.vue";
import StateTest from "./pages/StateTest.vue";
import TableMaker from "./pages/TableMaker.vue";
import TableTest from "./pages/TableTest.vue";
import Toast from "./pages/utils/Toast.vue";

const routes = [
	{path: '/', component: Home},
	{path: '/AtTest', component: AtTest},
	{path: '/components/ContextMenuTest', component: ContextMenuTest},
	{path: '/components/DialogTest', component: DialogTest},
	{path: '/draggable/DraggableDemo', component: DraggableDemo},
	{path: '/Home', component: Home},
	{path: '/slot/SlotTest', component: SlotTest},
	{path: '/StateTest', component: StateTest},
	{path: '/TableMaker', component: TableMaker},
	{path: '/TableTest', component: TableTest},
	{path: '/utils/Toast', component: Toast},
]

import { createRouter, createWebHistory } from 'vue-router';
export const router = createRouter({
    history: createWebHistory(),
    routes,
})
