<template>
	<div @click="onClick" class="place" :class="{'place_wide': listMode}">
		<div class="place__frame">
			<template v-if="options.photo">
				<img class="place__picture" :src="picture" :alt="options.title">
			</template>
			<template v-else>
				<div class="place__picture-placeholder"></div>
			</template>
		</div>
		<div class="place__title">
			{{options.title}}
		</div>
		<div class="place__description" v-html="options.description"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props:{
			options: Object,
			listMode: Boolean
		},
		computed:{
			picture() {
				return `images/raster/${this.options.photo}`;
			}
		},
		methods:{
			onClick() {
				this.$emit("placeSelected", this.options);
			}
		}
	}
</script>