
<script setup>
const router_list = [
	{
		"path": "/",
		"component": "Home"
	},
	{
		"path": "/components/ContextMenuTest",
		"component": "ContextMenuTest"
	},
	{
		"path": "/components/DialogTest",
		"component": "DialogTest"
	},
	{
		"path": "/components/TableTest",
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
		"path": "/slot/slot",
		"component": "slot"
	},
	{
		"path": "/StateTest",
		"component": "StateTest"
	},
	{
		"path": "/utils/Toast",
		"component": "Toast"
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
