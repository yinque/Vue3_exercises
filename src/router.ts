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

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
import { createRouter, createWebHistory } from 'vue-router';
export const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})