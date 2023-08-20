<script setup>
/*
形如
<el-table :data="formData" border @selection-change="handleSelect">
  <el-table-column type="selection" width="55"></el-table-column>
  <el-table-column prop="id" label="id"></el-table-column>
  <el-table-column prop="name" label="姓名"></el-table-column>
  <el-table-column label="格式化列" :formatter="formatter_fuc"></el-table-column>
</el-table>
这种表格
 */
import {reactive} from "vue";

const table_model = reactive({
  props:[

  ],
  datas:[
    {c1:1,c2:2,c3:3},
    {c1:4,c2:5,c3:6},
    {c1:7,c2:8,c3:9},
  ],
  colomns:[
    {prop:"c1",label:"列1"},
    {prop:"c2",label:"列2"},
    {prop:"c3",label:"列3"}
  ]
})
</script>

<template>
  <div>
    TableMaker
    <div>
      制作表
    </div>
    <div>
      生成表
      <el-table :data="table_model.datas">
        <el-table-column
            v-for="c in table_model.colomns"
            :prop="c.prop"
            :label="c.label"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style scoped>
</style>
