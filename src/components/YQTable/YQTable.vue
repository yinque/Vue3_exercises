<script lang="ts" setup>

</script>

<template>
  <div class="yq-table">
    YQTable
  </div>
</template>

<style scoped>
/* 表格整体样式 */
table {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
}

/* 表头样式 */
thead {
  background-color: #f2f2f2;
}
th {
  font-weight: bold;
  text-align: left;
}
th,td{
  padding: 10px;
}


/* 悬停样式 */
tbody tr:hover {
  background-color: #e6e6e6;
}

/* 边框样式 */
th,
td {
  border: 1px solid #ccc;
}
th:hover {
  background-color: lightgray;
}

th:hover ~ td {
  background-color: lightgray;
}
</style>
