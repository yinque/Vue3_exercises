<script setup>
import {useSlots, onMounted} from 'vue'

const slots = useSlots()
onMounted(()=>{
  console.log("mount", slots.default()[0].children)
})
console.log("setup", slots.default()[0].children)
</script>

<template>
  <div class="child">
    Child
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: "Child"
}
</script>