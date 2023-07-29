<script lang="ts" setup>
import {showDialog} from "../../components/YQDialog";
import DialogTable from "../../views/conponents/DialogTest.vue/DialogTable.vue"
import DialogComponent1 from "../../views/conponents/DialogTest.vue/DialogComponent.vue"
import DialogComponent2 from "../../views/conponents/DialogTest.vue/DialogWithButton.vue"
import DialogForm from "../../views/conponents/DialogTest.vue/DialogForm.vue"
function d1(){
  showDialog(DialogComponent1,{
    title: "简单弹窗"
  })
}
function d2(){
  showDialog(DialogComponent2,{
    title: "带按钮的弹窗"
  })
}
function d3(){
  showDialog(DialogTable,{
    title: "表格"
  })
}
function d4(){
  showDialog(DialogForm,{
    title: "表单",
    comp_props:{
      data_id: 3
    }
  })
}
</script>

<template>
  <div class="dialog-test">
    DialogTest
    <div>
      <button @click="d1">简单弹窗</button>
      <button @click="d2">按钮</button>
      <button @click="d3">表格</button>
      <button @click="d4">表单</button>
    </div>
  </div>
</template>

<style scoped>
</style>
