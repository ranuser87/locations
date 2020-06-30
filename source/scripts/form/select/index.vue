<template>
	<select
		class="custom-select" 
		:name="options.name" 
		:id="options.id"
		:class="options.cssMod"
		v-on="options.events">
		<select-item 
			v-for="item in options.items" 
			:key="item.id" 
			:value="item.value"
			:title="item.title"	
		>
		</select-item>
	</select>
</template>

<script>
	import selectItem from "./selectItem.vue";

	export default {
		data() {
			return {
				
			}
		},
		components:{
			selectItem
		},
		props:{
			options: Object
		}
	}
</script>