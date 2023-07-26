
<script setup>
const router_list = [
	{
		"path": "/",
		"component": "Home"
	},
	{
		"path": "/component_test/ContextMenuTest",
		"component": "ContextMenuTest"
	},
	{
		"path": "/component_test/DialogTest",
		"component": "DialogTest"
	},
	{
		"path": "/component_test/TableTest",
		"component": "TableTest"
	},
	{
		"path": "/draggable/DraggableDemo",
		"component": "DraggableDemo"
	},
	{
		"path": "/Home",
		"component": "Home"
	},
	{
		"path": "/slot/SlotTest",
		"component": "SlotTest"
	},
	{
		"path": "/StateTest",
		"component": "StateTest"
	}
]
</script>

<template>
  <div class="home">
    <div v-for="r in router_list">
      <router-link :to="r.path">{{r.path}}</router-link>
    </div>
  </div>
</template>

<style scoped>
</style>        
