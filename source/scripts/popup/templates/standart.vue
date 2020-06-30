<template>
	<div class="popup__content">
		<div class="popup__title">
			{{content.title}}	
		</div>
		<img v-if="content.photo" :src="picture" :alt="content.title" class="popup__picture">
		<div class="popup__description">
			{{content.description}}	
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props:{
			content: Object
		},
		computed:{
			picture() {
				return `images/raster/${this.content.photo}`;
			}
		}
	}
</script>