<template>
  <div class="home">
    <Waterfall name="瀑布流" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Waterfall from '@/components/waterfall/index.vue';


@Options({
  components: {
    Waterfall
  }
})
export default class Home extends Vue {

 
}

</script>

<style lang="scss" scoped>
</style>