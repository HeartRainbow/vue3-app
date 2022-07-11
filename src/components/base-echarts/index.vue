<template>
    <!-- <div ref="my-chart" class="my-chart" :style="{ height }" /> -->
    <div ref="my-chart" class="my-chart" />
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, onBeforeMount, onBeforeUnmount, nextTick, watchEffect } from "vue";
//引入echarts
import * as echarts from "echarts";

//如果需要中国地图
// import china from '@/assets/js/china.json';
// echarts.registerMap('china', china);

//如果需要tooltip自动轮播
import { loopShowTooltip, debounce } from '../../utils';

let chartsArr = [];

export default defineComponent({
    name: "BaseEcharts",
    props: {
        height: {
            type: String,
            default: "300px",
        },
        options: {
            type: Object,
            default: () => ({})
        },
    },
    setup(props) {
        //setup执行时组件对象还没有创建，我们可以通过 getCurrentInstance这个函数来返回当前组件的实例对象
        const { proxy } = getCurrentInstance();
        const initCharts = () => {
            //通过Promise异步操作,避免报错Initialize failed: invalid dom
            //1:新建一个promise对象
            let newPromise = new Promise((resolve) => {
                resolve(null);
            });
            // 2:然后异步执行echarts的初始化函数
            newPromise.then(() => {
                const myChart = echarts.init(proxy.$refs['my-chart'] as any);
                let tootipTimer = null;
                //侦听配置改变后重新渲染，必须放在newPromise.then()中，否则会出现异步问题，每次渲染都是上一次的结果
                watchEffect(() => {
                    myChart.setOption(props.options);
                    tootipTimer && tootipTimer.clearLoop();
                    tootipTimer = null;
                    tootipTimer = loopShowTooltip(myChart, props.options, 7, 2000);
                })
                chartsArr.push(myChart);
            });

        };
        //窗口resize事件
        // const resizeCharts = () => {
        //     for (var i = 0; i < chartsArr.length; i++) {
        //         chartsArr[i] && chartsArr[i].resize();
        //     }
        // };
        const resizeCharts = debounce(function () {
            for (var i = 0; i < chartsArr.length; i++) {
                chartsArr[i] && chartsArr[i].resize();
            }
        }, 500);
        onBeforeMount(() => {
            nextTick(() => {
                initCharts();
            });
        });
        onMounted(() => {
            window.addEventListener("resize", resizeCharts);
        });
        onBeforeUnmount(() => {
            window.removeEventListener('resize', resizeCharts);
        });
        return {

        };
    }
});
</script>

<style lang="scss" scoped>
.my-chart {
    width: 100%;
    height: 100%;
    min-height: 300px;
}
</style>