<!-- @route({ "path": "/about", "alias": "关于", "name": "About", "meta": { "requiresAuth": true } }) -->


<template>
  <div class="about">
    <BaseEcharts :options="options" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';
import Card from '@/components/Card.vue';
// import BaseEcharts from '@/components/base-echarts/index.vue';
import { reactive } from 'vue';

@Options({
  components: {
    HelloWorld,
    // BaseEcharts,
    Card
  }
})
export default class About extends Vue {
  options = reactive({
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      }
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  });
  setup() {
    return {};
  }
}
</script>
<!-- https://class-component.vuejs.org/guide/class-component.html#methods -->

<style lang="scss" scoped>
  .about {
      width: 100%;
      height: calc(100% - 80px);
  }
</style>