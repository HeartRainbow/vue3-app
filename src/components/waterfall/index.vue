<template>
  <div class="waterfall-container">
    <ul class="waterfall" id="waterfall">
      <li v-for="(item, index) in waterfallList" :key="index" class="waterfall-item"
        :style="{ top: item.top + 'px', left: item.left + 'px', width: waterfallItemWidth + 'px', height: item.height + 'px' }">
        <img v-lazy="item.src" :src="item.src" alt="">
        <div class="footer">
          <p style="font-size: small;color: #666;">{{ item.title }}</p>
          <p style="font-size: x-small;color: #9e9e9e;margin: 4px 0;padding-bottom: 6px;">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    name: String
  }
})
export default class Waterfall extends Vue {
  imgData = [
    'https://cdn.pixabay.com/photo/2021/12/14/09/22/animal-6870147__340.jpg',
    'https://cdn.pixabay.com/photo/2022/04/10/19/33/house-7124141__340.jpg',
    'https://cdn.pixabay.com/photo/2022/01/23/16/06/dog-6961236__340.jpg',
    'https://cdn.pixabay.com/photo/2022/06/09/04/53/ride-7251713__340.png',
    'https://cdn.pixabay.com/photo/2022/08/04/09/12/sea-7364224__340.jpg',
    'https://cdn.pixabay.com/photo/2022/06/09/04/53/ride-7251713__340.png',
    'https://cdn.pixabay.com/photo/2022/07/17/06/30/sunrise-7326601__340.jpg',
    'https://cdn.pixabay.com/photo/2022/04/10/19/33/house-7124141__340.jpg',
    'https://cdn.pixabay.com/photo/2022/08/01/09/32/daisies-7357753__340.jpg',
    'https://cdn.pixabay.com/photo/2022/08/05/18/50/houseplant-7367379__340.jpg',
    'https://cdn.pixabay.com/photo/2022/07/17/06/30/sunrise-7326601__340.jpg',
    'https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__480.jpg',
    'https://cdn.pixabay.com/photo/2022/06/27/14/38/cat-7287671__340.jpg',
    'https://cdn.pixabay.com/photo/2022/07/21/06/56/ocean-7335499__340.jpg',
    'https://cdn.pixabay.com/photo/2022/08/05/18/50/houseplant-7367379__340.jpg',
    'https://cdn.pixabay.com/photo/2022/08/05/19/21/squirrel-7367445__340.jpg',
    'https://cdn.pixabay.com/photo/2022/06/27/14/38/cat-7287671__340.jpg',
    'https://cdn.pixabay.com/photo/2022/08/05/19/21/squirrel-7367445__340.jpg',
    'https://cdn.pixabay.com/photo/2022/04/18/21/27/pisa-7141606__340.jpg',
    'https://cdn.pixabay.com/photo/2022/02/21/04/14/squirrel-7025721__340.jpg'
  ];
  waterfallList = [] as any[];
  imgList = [];
  column = 5;
  gap = 20;
  waterfallItemWidth = 0;
  waterfallDeviationHeight = [];

  created() {
    // 触发入口
    for (const item of this.imgData) {
      // this.imgList.push(this.imgArr[Math.round(Math.random() * 8)]);// 图片随机显示
      this.imgList.push(item);
    }
  }

  mounted() {
    console.log('I am Mounted');
    this.calculationWidth()
  }

  //计算每个图片的宽度或者是列数
  calculationWidth() {
    let domWidth = document.getElementById("waterfall").offsetWidth;
    console.log(domWidth);

    if (!this.waterfallItemWidth && this.column) {
      this.waterfallItemWidth = (domWidth - (this.gap * this.column)) / this.column;
      console.log(this.waterfallItemWidth);

    } else if (this.waterfallItemWidth && !this.column) {
      this.column = Math.floor(domWidth / (this.waterfallItemWidth + this.gap))
    }
    //初始化偏移高度数组
    this.waterfallDeviationHeight = new Array(this.column);
    for (let i = 0; i < this.waterfallDeviationHeight.length; i++) {
      this.waterfallDeviationHeight[i] = 0;
    }
    this.imgPreloading()
  }

  //图片预加载
  imgPreloading() {
    for (let i = 0; i < this.imgList.length; i++) {
      let aImg = new Image();
      aImg.src = this.imgList[i];
      aImg.onload = aImg.onerror = () => {
        let imgData = {
          height: this.waterfallItemWidth / aImg.width * aImg.height + 55,
          src: this.imgList[i],
          title: '标题',
          desc: '详情说明：啦啦啦啦啦'
        };
        this.waterfallList.push(imgData);
        this.rankImg(imgData);
      }
    }
  }

  //瀑布流布局
  rankImg(imgData) {
    let { waterfallItemWidth, gap, waterfallDeviationHeight } = this;
    let minIndex = this.filterMin();
    imgData.top = waterfallDeviationHeight[minIndex];
    imgData.left = minIndex * (gap + waterfallItemWidth);
    // waterfallDeviationHeight[minIndex] += imgData.height + waterfallImgBottom;// 不加文字的盒子高度
    waterfallDeviationHeight[minIndex] += imgData.height + gap + 56;// 加了文字的盒子高度，留出文字的地方（这里设置56px）
    console.log(imgData);
  }
  /**
   * 找到最短的列并返回下标
   * @returns {number} 下标
   */
  filterMin() {
    const min = Math.min.apply(null, this.waterfallDeviationHeight);
    return this.waterfallDeviationHeight.indexOf(min);
  }
}

</script>

<style lang="scss" scoped>
ul>li {
  margin: 0;
}

.waterfall-container {
  width: 100%;
}

.waterfall {
  /* 主要 */
  width: 100%;
  height: 400px;
  position: relative;
  /* 次要：设置滚动条，要求固定高度 */
  overflow-y: auto;
}

.waterfall-item {
  /* 主要 */
  float: left;
  position: absolute;
  box-sizing: border-box;
}

.waterfall-item {
  border-radius: 6px;
  overflow: hidden;

  img {
    /* width: auto;height: auto; */
    width: 100%;
    height: auto;
  }

  .footer {
    background-color: #fff;
    border: 2px solid #eee;
    border-top: none;
  }
}
</style>