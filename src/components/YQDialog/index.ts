/*
右键菜单组件
 */
import YQDialog from "./YQDialog.vue"
import {createApp, h} from "vue";

let dialog_count = 0;

export function showDialog(component,options={
    title:"弹窗标题"
}) {
    // body创建root容器
    const root = document.createElement('div')
    document.body.appendChild(root)

    console.log(component)
    // 创建app
    const app = createApp(() => h(YQDialog, {
        id: dialog_count,
        title:options.title
    },[
        h(component)
    ]))
    // 渲染组件到root元素上
    app.mount(root)

    // 移除弹窗方法
    const removeRoot = () => {
        app.unmount()
        root.remove()
    }
    // 处理子组件发送的close事件
    root.addEventListener('close', () => {
        // alert("1")
        removeRoot()
    })

}