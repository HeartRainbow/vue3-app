<template>
  <div class="home">
    <Waterfall>
      <template #default="{ row }">
        <div class="waterfall-item">
          <img v-lazy="row.src" :src="row.src" alt="" >
          <!-- <span>{{ row.info }}</span> -->
        </div>
      </template>
    </Waterfall>
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
export default class Home extends Vue { }

</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}

.waterfall-item {
  width: 100%;
  height: 100%;
  background-color: rgb(238, 238, 238);
  // position: absolute;
  // border-radius: 10px;
  // padding: 5px;
  // padding-left: 0;


  img {
    width: 100%;
    display: block;
    border-radius: 6px;
    // opacity: 0;
    // transform: scale(0.5);
    // transition: all 0.6s;
    // transition-delay: 0.1s;
  }
}
</style>