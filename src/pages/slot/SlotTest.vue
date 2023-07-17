<script setup>
// get slot value in child component in script setup
import Child from "./Child.vue";
</script>

<template>
  <div class="slot-test">
    SlotTest
    <Child>123</Child>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: "SlotTest"
}
</script>