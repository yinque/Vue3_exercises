<script lang="ts" setup>
import {showDialog} from "../../components/YQDialog";
import TableTest from  "./TableTest.vue"
function d1(){
  showDialog(TableTest,{
    title: "弹窗1"
  })
}
function d2(){
  showDialog(TableTest,{
    title: "弹窗2"
  })
}
</script>

<template>
  <div class="dialog-test">
    DialogTest
    <button @click="d1">弹窗1</button>
    <button @click="d2">弹窗2</button>
  </div>
</template>

<style scoped>
</style>
