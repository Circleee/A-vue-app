import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import goods from './comp/goods.vue';
import ratings from './comp/ratings.vue';
import seller from './comp/seller.vue';

Vue.use(VueRouter);
Vue.use(VueResource);


let app  =  Vue.extend(App);

let router = new VueRouter();

router.map({
	'/goods':{
		component:goods
	},
	'/ratings':{
		component:ratings
	},
	'/seller':{
		component:seller
	}


});

router.start(app,'#app');

router.go('/goods');