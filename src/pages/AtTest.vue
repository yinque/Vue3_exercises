<script lang="ts" setup>
// 测试import xxx from '@/xxx'
import {showToast} from "src/utils/toast";
</script>

<template>
  <div class="at-test">
    AtTest
    <button @click="showToast('233')">点我点我</button>
  </div>
</template>

<style scoped>
</style>
