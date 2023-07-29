<script setup>
import {data} from "./state";
import {reactive} from "vue";

const r = reactive(data)
</script>

<template>
  <div class="component2">
    Component2
    <div>
      计数器：{{r.count}}
    </div>
    <button @click="r.count++">增加</button>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: "Component2"
}
</script>