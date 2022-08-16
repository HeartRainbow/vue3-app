<template>
  <div class="home">
    <Waterfall />
    <!-- <DragUpload :propA="222"/> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Waterfall from '@/components/waterfall/waterfall.vue';
// import Waterfall from '@/components/waterfall/index.vue';
// import Waterfall from '@/components/waterfall.vue';
import DragUpload from '@/components/drag-upload/index.vue';


@Options({
  components: {
    Waterfall,
    DragUpload
  }
})
export default class Home extends Vue {

 
}

</script>

<style lang="scss" scoped>
</style>