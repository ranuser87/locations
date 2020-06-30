<template>
	<div class="locations__item" :class="cssMod">
		<place @placeSelected="onPlaceSelected" 
				:options="options" 
				:list-mode="listMode"></place>	
	</div>
</template>

<script>
	import place from "@scripts/place/index.vue";

	export default {
		data() {
			return {

			}
		},
		props:{
			options: Object,
			listMode: Boolean
		},
		components:{
			place
		},
		computed:{
			cssMod() {
				return this.listMode ? "col-12" : "col-md-4 col-sm-6 col-12";
			}
		},
		methods:{
			onPlaceSelected(place) {
				this.$emit("itemSelected", place);
			}
		}
	}
</script>