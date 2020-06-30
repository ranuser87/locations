<template>
	<option :value="value">{{ title }}</option>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props:{
			value: String,
			title: String
		}
	}
</script>