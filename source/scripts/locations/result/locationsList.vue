<template>
	<div class="locations__list row">
		<template v-if="options.items.length > 0">
			<template v-for="item in options.items">
				<locationsItem 
					:key="item.id"
					:options="item"
					:list-mode="options.listMode"
					@itemSelected="onItemSelected"
					>
				</locationsItem>
			</template>
		</template>
		<template v-else>
			<locationsNotFound :message="options.message"></locationsNotFound>
		</template>
	</div>
</template>

<script>
	import locationsItem from "./locationsItem.vue"
	import locationsNotFound from "./locationsNotFound.vue"
	//polyfills
	import "core-js/modules/es6.object.assign"
	import "formdata-polyfill/formdata.min.js"

	export default {
		data() {
			return {

			}
		},
		props: {
			options: Object
		},
		components: {
			locationsItem,
			locationsNotFound
		},
		methods:{
			onItemSelected(item) {
				this.$emit("itemSelected", item);
			}
		}
	}
</script>