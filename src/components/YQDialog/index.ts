/*
Dialog组件
 */
import YQDialog from "./YQDialog.vue"
import {createApp, h} from "vue";

export function showDialog(component,options={
    title:"弹窗标题",
    comp_props:{}   //组件属性
}) {
    // body创建root容器
    const root = document.createElement('div')
    document.body.appendChild(root)

    // 创建app
    const app = createApp(() => h(YQDialog, {
        title:options.title
    },
        ()=>[h(component,{
            // "onClose":()=>removeRoot(),
            on:{
                close: ()=>removeRoot()
            },
            ...options.comp_props
        })]
    ))
    // 渲染组件到root元素上
    app.mount(root)

    // 移除弹窗方法
    const removeRoot = () => {
        app.unmount()
        root.remove()
    }
    // 处理子组件发送的close事件
    root.addEventListener('close', () => {
        removeRoot()
    })
}
