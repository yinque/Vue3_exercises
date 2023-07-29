<script lang="ts" setup>
import {defineProps} from "vue";
import {showToast} from "../../utils/toast.js";

const props = defineProps(['id', 'title',"component"])

const root_id = 'id_'+Math.random()

const closeDialog = ()=>{
  // 根元素触发close事件，使父元素接收到并remove自身
  const root=document.getElementById(root_id)
  const closeEvent = new CustomEvent('close', { detail: 'remove dialog',bubbles:true });
  root.dispatchEvent(closeEvent)
}

// 可移动性处理
const moveStart = ()=>{
  showToast("移动开始")
}
const moveEnd = ()=>{
  showToast("移动关闭")
}
</script>

<template>
  <div class="yq-dialog" :id="root_id">
    <div class="overlay">
      <div class="dialog flex-col">
        <div class="title-bar flex">
          <div class="title">
            {{props.title}}
          </div>
          <div class="flex-grow"></div>
          <div class="btn-group">
            <button
                @mousedown="moveStart"
                @mouseup="moveEnd"
            >移动</button>
            <button @click="closeDialog"
            >关闭</button>
          </div>
        </div>
        <div class="content flex-grow">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay{
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.2);
}
.dialog{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  height: 20em;
  /*width: 30em;*/
  min-width: 30em;
  /*min-height: 20em;*/
  background-color: white;
}
.content{
  padding: 10px;
  box-sizing: border-box;
}
.title-bar{
  font-weight: bold;
  font-size: 1em;
  padding: 10px;
  background-color: deepskyblue;
}

</style>
