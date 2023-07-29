<script lang="ts" setup>
const ROW = 5
const COL = 6
const Range = (i)=> Array(i).fill(0).map((e,i)=>(i))
const head = Range(COL).map(i=>"表头"+(i+1))
const data = Range(ROW).map(i=>Range(COL).map(j=>`数据${i+1}-${j+1}`))
console.table(head)
console.table(data)

</script>

<template>
  <div class="bg-light">
    <table>
      <thead>
      <tr>
        <th v-for="h in head">{{h}}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="row in data">
        <td v-for="cell in row">{{cell}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
/* 表格整体样式 */
table {
  /*width: 100%;*/
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  /*background-color: white;*/
}

/* 表头样式 */
thead {
  background-color: #CCC;
}
th {
  /*font-weight: bold;*/
}
/* 数据悬停样式 */
tbody tr:hover {
  background-color: #e6e6e6;
}

/* 表头数据共同样式 */
th, td {
  border: 1px solid #AAA;
  padding: 10px;
  text-align: center;
}
</style>