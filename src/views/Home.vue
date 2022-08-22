<template>
  <div class="home">
    <Waterfall>
      <template #default="{ row }">
        <div class="waterfall-item">
          <div class="box">
            <img v-lazy="row.src" :src="row.src" alt="">
          </div>
          <div class="mask">
            <div class="mask-img" :style="{ background: 'url(' + row.src + ')' }"></div>
            <div class="mask-footer">
              <div class="mask-footer-left">
                <div>
                  <p>xiaomi</p>
                  <p>2022-08-20</p>
                </div>
                <img class="logo" src="https://www.cn.nikon.com/assets/img/logo.svg" alt="">
              </div>
              <div class="mask-footer-right">
                <p>120mm f/4.1 1/100 iso100</p>
                <p>xiamen</p>
              </div>
            </div>
          </div>
          <!-- <div class="mask">
            <p>镜头：太苦玛 55mm F1.8</p>
            <p>光圈：f1.4</p>
            <p>快门：1/250</p>
            <p>iso：250</p>
            <p>焦距：55mm</p>
          </div> -->
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

// .mask p {
//   margin: 5px 0;
// }

.waterfall-item:hover .box {
  transform: rotateY(-180deg);
}

.waterfall-item .mask {
  transform: rotateY(-360deg);
}

// .waterfall-item:nth-child(1) .mask {
//   color: teal;
// }

// .waterfall-item:nth-child(2) .mask {
//   color: red;
// }

// .waterfall-item:nth-child(3) .mask {
//   color: orangered;
// }

// .waterfall-item:nth-child(4) .mask {
//   color: white;
// }


.mask {
  border: 2px solid #E4E7ED;
  overflow: hidden;

  &-img {
    width: auto;
    height: 100%;
    filter: blur(5px);
  }

  &-footer {
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 0 10px;

    &-left {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      div:first-child {
        text-align: left;
      }

      p:first-child {
        color: #303133;
        font-size: 14px;
        margin-bottom: 5px;
      }

      p:last-child {
        color: #909399;
        font-size: small;
      }

      img {
        width: 40px;
      }
    }

    &-right {
      width: 50%;
      margin-left: 10px;
      border-left: 1px solid #DCDFE6;
      text-align: right;

      p:first-child {
        color: #303133;
        font-size: 14px;
        margin-bottom: 5px;
      }

      p:last-child {
        color: #909399;
        font-size: small;
      }
    }


    p {
      margin: 0;
    }
  }
}
</style>