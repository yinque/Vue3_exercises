<script setup>

import Component1 from "../views/StateTest/Component1.vue";
import Component2 from "../views/StateTest/Component2.vue";
</script>

<template>
  <div class="state-test">
    无VueX状态共享测试
    <Component1 class="board"></Component1>
    <Component2 class="board"></Component2>
  </div>
</template>

<style scoped>
.board{
  margin: 10px;
}
</style>

<script>
export default {
  name: "StateTest"
}
</script>