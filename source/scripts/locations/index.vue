<template>
	<div id="locations" class="locations">
		<locationsFilter 
			@onFiltrationDone="onFiltrationDone">
		</locationsFilter>
		<popup ref="popup" v-if="currentItem" inner-template="standart" :content="popupContent">
		</popup>
		<locationsList
			:options="filtration"
			@itemSelected="onItemSelected">	
		</locationsList>
	</div>
</template>

<script>
import locationsFilter from "./filter/locationsFilter.vue";
import locationsList from "./result/locationsList.vue";
import popup from "@popup/index.vue";

export default {
	data() {
		return {
			filtration: {
				items: [],
				message: "Данные не были загружены"
			},
			currentItem: null
		}
	},
	components: {
		locationsFilter,
		locationsList,
		popup
	},
	computed: {
		popupContent() {
			return {
				title: this.currentItem.title, 
				description: this.currentItem.description, 
				photo: this.currentItem.photo
			}
		}
	},
	methods: {
		onFiltrationDone(result) {
			this.filtration = result;
		},
		onItemSelected(item) {
			this.currentItem = item;
			this.$nextTick(()=>{
				this.$refs.popup.activate();
			});
		}
	}
}
</script>