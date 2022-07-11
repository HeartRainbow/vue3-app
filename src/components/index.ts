// 引入写好的全局组件
import BaseEcharts from './base-echarts/index.vue';
// 默认导出插件
export default {
	install: function(Vue) {
		console.log('自定义全局注册插件~')
		Vue.component('BaseEcharts', BaseEcharts);
	}
}
