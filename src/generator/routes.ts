import Home from "./pages/Home.vue";
import StateTest from "./pages/StateTest.vue";
import DraggableDemo from "./pages/draggable/DraggableDemo.vue";
import DraggableHandle from "./pages/draggable/DraggableHandle.vue";

const routes = [
	{path: '/Home', component: Home},
	{path: '/', component: Home},
	{path: '/StateTest', component: StateTest},
	{path: '/draggable/DraggableDemo', component: DraggableDemo},
	{path: '/draggable/DraggableHandle', component: DraggableHandle},
]