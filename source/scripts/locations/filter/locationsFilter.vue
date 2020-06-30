<template>
	<form v-if="locationsData" ref="form" class="locations__filter">
		<template v-for="control in controls">
			<formUnit 
				:key="control.id"
				:options="control">
			</formUnit>
		</template>
	</form>
</template>

<script>
	import locationsData from "./data.js";
	import find from "lodash/find";
	import filter from "lodash/filter";
	import formUnit from "@form/index.vue";

	const emptyResultMessage = "По Вашему запросу ничего не найдено.";

	export default {
		data: function() {
			return {
				locationsData
			}
		},
		components:{
			formUnit
		},
		computed: {
			controls() {
				return this.locationsData.filter.map((filterUnit)=>{
					return Object.assign({}, filterUnit, {
						events:{
							change: this.doFiltration
						}
					});
				});
			},
			regions() {
				return this.locationsData.regions;
			}
		},
		methods:{
			doFiltration() {
				if(!locationsData) return;

				let result = [];
				let formData = new FormData(this.$refs.form);

				let regionId = formData.get("region");
				result = find(this.regions, ["id", regionId]).items;
				
				let photoFlag = !!formData.get("photo");
				if(photoFlag) {
					result = filter(result, (item)=>{
						return !!item.photo === photoFlag;
					});	
				}

				let listMode = !!formData.get("listMode");
				
				let resultObject = result.length ? {
					items: result,
					message: "",
					listMode
				} : {
					result: [],
					message: emptyResultMessage
				}

				this.$emit("onFiltrationDone", resultObject);
			}
		},
		mounted() {
			this.doFiltration();	
		}
	}
</script>