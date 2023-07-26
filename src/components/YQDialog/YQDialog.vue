<script lang="ts" setup>
import {defineProps} from "vue";

const props = defineProps(['id', 'title',"component"])

const closeDialog = ()=>{
  // 根元素触发close事件，使父元素接收到并remove自身
  const element = document.getElementById(props.id);
  const removeEvent = new CustomEvent('close', { detail: 'remove dialog',bubbles:true });
  element.dispatchEvent(removeEvent)
}
</script>

<template>
  <div class="yq-dialog" :id="props.id">
    <div class="background">
      <div class="window">
        <div class="title-bar flex">
          <div class="title">
            {{props.title}}
          </div>
          <div class="flex-flow"></div>
          <div class="btn-group">
            <button @click="closeDialog"
            >关闭</button>
          </div>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background{
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
}
.window{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 50vw;
  height: 50vh;
  background-color: white;
}
.title-bar{
  font-size: 1.5em;
  padding: 10px;
  background-color: deepskyblue;
}

.flex{
  display: flex;
}
.flex-flow{
  flex: 1 1 auto;
}
</style>
