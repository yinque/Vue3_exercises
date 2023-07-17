<script setup>
// 基本样例
import { Container, Draggable } from 'vue3-smooth-dnd'
import {reactive} from "vue";

const r = reactive({
  items: Array(20).fill(0).map((v,i)=>{return {id:i,data:"Item "+i}})
})
console.log(r.items)

const applyDrag = (arr, dragResult) => {
  const { removedIndex, addedIndex, payload } = dragResult
  if (removedIndex === null && addedIndex === null) return arr

  const result = [...arr]
  let itemToAdd = payload

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0]
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd)
  }

  return result
}
function onDrop (dropResult) {
  r.items = applyDrag(r.items, dropResult)
}
</script>

<template>
  <div class="draggable-demo">
    DraggableDemo
    <div class="board">
      <Container @drop="onDrop" lock-axis="y">
        <Draggable v-for="item in r.items" :key="item.id">
          <div class="draggable-item board">
            {{item.data}}
          </div>
        </Draggable>
      </Container>
    </div>

  </div>
</template>

<style scoped>
.draggable-item{
  width: 20em;
  margin: 0.5em;
  background-color: gray;
}
.draggable-item:hover{
  cursor: move;
}
</style>

<script>
export default {
  name: "DraggableDemo"
}
</script>