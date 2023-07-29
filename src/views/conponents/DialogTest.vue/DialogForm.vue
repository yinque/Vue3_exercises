<script setup>
import {defineEmits, defineProps, onMounted, reactive} from "vue";
import {showToast} from "../../../utils/toast";

// 创建响应式数据
const formData = reactive({
  name: '',
  email: '',
  password: '',
});

const data = [
  { name: 'Alice', email: 'alice@example.com', password: 'password123' },
  { name: 'Bob', email: 'bob@example.com', password: 'securepassword' },
  { name: 'Charlie', email: 'charlie@example.com', password: '12345' },
  { name: 'David', email: 'david@example.com', password: 'abcde' },
  { name: 'Eve', email: 'eve@example.com', password: 'hello123' }
];

const props = defineProps(['data_id'])

onMounted(()=>{
  if(!props.data_id){
    showToast("传入id错误")
  }
  Object.assign(formData,data[props.data_id])
  console.log(formData)
})

const emits = defineEmits(['close'])
// 处理表单提交事件
const handleSave = () => {
  emits('close')
  showToast("已保存")
};
const handleCancel = () => {
  emits('close')
  showToast("已取消")
};

</script>

<template>
  <form class="bg-light fill-container flex-col">
    <div>
      <label for="name">name: </label>
      <input type="text" v-model="formData.name">
    </div>
    <div>

      <label for="email">email: </label>
      <input type="email" v-model="formData.email">
    </div>
    <div>
      <label for="password">password: </label>
      <input type="password" v-model="formData.password">
    </div>
    <div class="flex-grow"></div>
    <div class="flex-center">
      <button type="button" @click="handleSave">保存</button>
      <button type="button" @click="handleCancel">取消</button>
    </div>
  </form>
</template>

<style scoped>
form{
}
label{
  display: inline-block;
  width: 5em;
}
button{
  margin: 0 0.5em;
}
</style>
