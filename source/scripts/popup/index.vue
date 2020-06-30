<template>
	<div class="popup" :style="{top: topOffset}" v-show="active">
		<div class="popup__overlay" @click="deactivate"></div>
		<div class="popup__box">
			<button class="popup__close" @click="deactivate"></button>
			<component :is="innerTemplate" :content="content"></component>
		</div>
	</div>
</template>

<script>
	import PageScroll from "@utils/pageScroll";
	import standart from "@popup/templates/standart.vue";

	let pageScroll;

	export default {
		data() {
			return {
				active: false,
				topOffset: "300px"
			}
		},
		props:{
			content: Object,
			innerTemplate: String
		},
		components:{
			standart
		},
		methods:{
			activate() {
				this.active = true;
			},
			deactivate() {
				this.active = false;
			}
		},
		watch:{
			active(value) {
				if(value) {
					pageScroll.lock();
					this.topOffset = `${pageScroll.getCachedScrollTop()}px`;
				} else {
					pageScroll.unlock();
				}
			}
		},
		mounted() {
			pageScroll = new PageScroll().init();
		}
	}
</script>