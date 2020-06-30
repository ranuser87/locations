import Vue from "vue";
import Locations from "./locations/index.vue";
import PageScroll from "./utils/pageScroll"; 

new Vue({
	el: "#locations",
	render: h => h(Locations) 
})


