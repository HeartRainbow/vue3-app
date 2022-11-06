<template>
  <div class="home">
    <!-- <Header /> -->
    <el-button @click="dialogVisible = !dialogVisible">弹窗</el-button>
    <div v-drag2 class="rect">
      hahahah1
    </div>
    <!-- <div v-drag="{DragButton:'.el-dialog__header',DragVindow:'.el-dialog'}" > -->
    <div v-drag>
      <el-dialog title="弹窗" v-model="dialogVisible" :close-on-click-modal="false" width="75%">
        <div style="color: darkorange;font-size: 64px;">
          弹窗
        </div>
      </el-dialog>
    </div>


    <!-- <Waterfall>
      <template #default="{ row }">
        <div class="waterfall-item-inner">
          <div class="box">
            <img v-lazy="row.src" :src="row.src" alt="">
          </div>
        </div>
      </template>
    </Waterfall> -->
    <!-- <DragUpload :propA="222"/> -->

    <div class="content">
      <button @click="changeTheme('light')">light</button>
      <button @click="changeTheme('dark')">dark</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Waterfall from '@/components/waterfall/index.vue';
import Header from './header/index.vue';
import DragUpload from '@/components/drag-upload/index.vue';
import { DateLoader } from '@app/index';
import { Inject } from 'lite-typedi';

@Options({
  components: {
    Waterfall,
    DragUpload,
    Header
  }
})
export default class Home extends Vue {

  @Inject()
  dateLoader: DateLoader

  dialogVisible = false

  changeTheme(theme) {
    console.log(theme);
    window.document.documentElement.setAttribute('data-theme', theme)
  }

  mounted() {
    console.log('123', this.dateLoader.unix());
  }
}

</script>

<style lang="scss" scoped>
@import "@/styles/variable.scss";
@import "@/styles/mixin.scss";

.content {
  height: 80px;
  line-height: 80 px;
  text-align: center;
  @include text-color(text-1);
  @include bg-color(text-2);
}



.home {
  width: 100%;
  height: 100%;
}

:deep(.waterfall-item) {
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 1s ease;

  &:hover {
    transform: rotateX(0deg) rotateY(0deg) rotate(0deg) translate(4px, 4px);
    opacity: 0.6;
  }
}

.waterfall-item-inner {
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: all 1s ease;

  &:hover:after {
    transform: translateX(100%);
    transition: all 1.5s ease-in-out;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background-image: linear-gradient(60deg, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) 80%);
  }

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

// .waterfall-item-inner:hover .box {
//   transform: rotateY(-180deg);
// }


.rect {
  width: 100px;
  height: 100px;
  background-color: peru;
  position: absolute;
}
</style>