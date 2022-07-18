import Vue from "vue";
import { BPagination, NavbarPlugin, CarouselPlugin, TabsPlugin } from "bootstrap-vue";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.component("b-pagination", BPagination);
Vue.use(CarouselPlugin);
Vue.use(NavbarPlugin);
Vue.use(TabsPlugin);
