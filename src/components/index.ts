// 引入自定义的全局组件
import BaseEcharts from './base-echarts/index.vue';
// 默认导出插件
export default {
	install: function (Vue) {
		Vue.component('BaseEcharts', BaseEcharts);
	}
}
