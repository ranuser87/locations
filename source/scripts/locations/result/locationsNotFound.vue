<template>
	<div class="locations__not-found">
		{{message}}
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props:{
			message: String
		}
	}
</script>