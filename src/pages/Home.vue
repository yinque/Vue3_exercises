
<script setup>
const router_list = [
	{
		"path": "/",
		"component": "Home"
	},
	{
		"path": "/AtTest",
		"component": "AtTest"
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
	},
	{
		"path": "/TableMaker",
		"component": "TableMaker"
	},
	{
		"path": "/TableTest",
		"component": "TableTest"
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
