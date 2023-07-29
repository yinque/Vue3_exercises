<script setup>
// get slot value in child component in script setup
import Child from "../../views/slot/Child.vue";
</script>

<template>
  <div class="slot-test">
    SlotTest
    <h4>在子元素中使用js获取槽中的数据，打开控制台查看</h4>
    <Child>SlotData：123</Child>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: "SlotTest"
}
</script>