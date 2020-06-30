<template>
	<div class="custom-control" :class="cssMod">
		<input 
			:type="options.type" 
			:id="options.id"
			:name="options.id"
			v-on="options.events"
			class="custom-control-input" 
		>
		<label class="custom-control-label" :for="options.id">{{options.title}}</label>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		computed:{
			cssMod() {
				let resultingCssMod = this.options.cssMod ? ` ${this.options.cssMod}` : "";
				return this.options.type === "checkbox" ? 
						`custom-checkbox${resultingCssMod}` : 
						`custom-radio${resultingCssMod}`;
			} 
		},
		props:{
			options: Object
		}
	}
</script>