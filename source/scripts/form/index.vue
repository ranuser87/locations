<template>
	<component :is="componentName" :options="options"></component>
</template>

<script>
	import selectComponent from "./select/index.vue";
	import flag from "./flag.vue";

	export default {
		data() {
			return {

			}
		},
		components:{
			selectComponent,
			flag
		},
		computed:{
			componentName() {
				let type = this.options.type;
				if(type === "select") {
					return "selectComponent";
				} else if(type === "checkbox" || type === "radio") {
					return "flag";
				}
			}
		},
		props: {
			options: Object
		}
	}
</script>