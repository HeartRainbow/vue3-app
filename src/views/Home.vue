<template>
  <div class="home">
    <Waterfall>
      <template #default="{ row }">
        <div class="waterfall-item">
          <div class="box">
            <img v-lazy="row.src" :src="row.src" alt="">
          </div>
        </div>
      </template>
    </Waterfall>
    <!-- <DragUpload :propA="222"/> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Waterfall from '@/components/waterfall/index.vue';
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
  overflow: hidden;
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
    transition: all 0.6s;
    // transition-delay: 0.1s;
  }
}


.box {
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 6px;
  color: #fff;
  position: absolute;
  perspective: 1000px;
  transition: 0.5s ease-in-out;
}

.mask {
  box-sizing: border-box;
  // padding: 20px;
  width: 100%;
  height: 100%;
  // background-color: rgb(0, 0, 0, 0.7);
  font-size: 14px;
  // filter: blur(2px);
  border-radius: 6px;
  color: #fff;
  // text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  // font-family: '微软雅黑';
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000px;
  transform: rotateY(-180deg);
  transition: 0.5s ease-in-out;
}

// .waterfall-item:hover .box {
//   transform: rotateY(-180deg);
// }

</style>