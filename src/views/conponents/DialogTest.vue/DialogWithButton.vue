<script setup>
// const root_id = 'i'+Math.random()
// function closeDialog(){
//   const closeEvent = new CustomEvent('close', { detail: 'remove dialog',bubbles:true });
//   document.getElementById(root_id).dispatchEvent(closeEvent)
// }
import {defineEmits} from "vue";

const emits = defineEmits(['close'])
function confirmDialog(){
  emits('close')
}
function cancelDialog(){
  emits('close')
}
</script>

<template>
  <div class="dialog-component2 bg-light fill-container flex-col">
    <div class="flex-grow">
      带按钮的组件
    </div>
    <footer>
      <div class="flex-center">
        <button @click="confirmDialog">确定</button>
        <button @click="cancelDialog">取消</button>
      </div>
    </footer>
  </div>
</template>

<style scoped>
button{
  margin: 0 0.5em;
}
</style>
