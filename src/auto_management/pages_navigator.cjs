// 遍历pages页面，自动生成首页链接，以及路由导航
const fs = require('fs')
const path = require('path');


/*
相对于本模块的路径
 */
const ROUTER_TS_FILE = "../router.ts"
const HOME_VUE_FILE = "../pages/Home.vue"
const PAGES_PATH = "../pages"
// process.chdir(PAGES_PATH)
// 计算文件所在目录
const router_ts_folder = path.posix.dirname(ROUTER_TS_FILE)
// console.log({router_ts_folder,app_vue_folder})
function traverse_file(dir){
    const file_list = [];
    function _traverse_file(dir){
        for (const file_name of fs.readdirSync(dir)){
            if(fs.statSync(path.posix.join(dir,file_name)).isFile()){
                const full_name = path.posix.join(dir,file_name) //相对于本模块
                const file_name_no_ext = path.parse(file_name).name
                const full_name_no_ext = path.posix.join(dir,file_name_no_ext) //相对于本模块
                file_list.push({
                    full_name,
                    import_name: "./" + path.posix.relative(router_ts_folder,full_name),   // in router.ts
                    component: file_name_no_ext,                                    // in router.ts
                    path: "/" + path.posix.relative(PAGES_PATH,full_name_no_ext)                 // in router.ts
                })
            }else{
                _traverse_file(path.posix.join(dir,file_name))
            }
        }
    }
    _traverse_file(dir)
    return file_list
}

class RouterModel{
    files
    router_list=[]
    import_list=[]
    constructor(alias=null) {
        this.files = traverse_file(PAGES_PATH)
        for (const file of this.files){
            const {path, component, import_name} = file
            this.router_list.push({
                path,
                component
            })
            this.import_list.push({component,import_name})
            if(alias){
                const name = alias[path]
                if(name){
                    this.router_list.unshift({path:name,component})
                }

            }
        }
    }
    makeRoutes(){
        const prefix = "const routes = [\n\t"
        const suffix = ",\n]"
        const separator = ",\n\t"
        return prefix +
            this.router_list.map(e=>`{path: '${e.path}', component: ${e.component}}`).join(separator) +
            suffix
    }
    makeImports(){
        return this.import_list.map(e=>`import ${e.component} from "${e.import_name}";`).join("\n")
    }
    makeRouterTs(){
        return this.makeImports()+"\n\n"+
            this.makeRoutes()+"\n"+ `
import { createRouter, createWebHistory } from 'vue-router';
export const router = createRouter({
    history: createWebHistory(),
    routes,
})
`
    }
    makeHomeVue(){
        return `
<script setup>
const router_list = ${JSON.stringify(this.router_list,null,'\t')}
</script>

<template>
  <div class="home">
    <div v-for="r in router_list">
      <router-link :to="r.path">{{r.path}}</router-link>
    </div>
  </div>
</template>

<style scoped>
</style>        
`
    }
}

const rm = new RouterModel({
    "/Home": "/"
})

fs.writeFileSync(ROUTER_TS_FILE,rm.makeRouterTs(),"utf-8")
fs.writeFileSync(HOME_VUE_FILE,rm.makeHomeVue(),"utf-8")
// console.log(rm.makeRouterTs())
// console.log(rm.makeHomeVue())