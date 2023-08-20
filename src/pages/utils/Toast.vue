<script lang="ts" setup>
import {showToast} from "../../utils/toast"
</script>

<template>
  <div class="toast">
    Toast
    <div>
      <button @click="showToast()">显示Toast</button>
    </div>
  </div>
</template>

<style scoped>
</style>
