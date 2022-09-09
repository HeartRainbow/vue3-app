<template>
    <ul class="waterfall" id="waterfall" ref="waterfall">
        <li class="waterfall-item default-card-animation" v-for="(item, index) in imgsArr_c" :key="index"
            :style="{ width: imgWidth + 'px', height: item._height + 'px' }" ref="waterfallItem">
            <slot v-bind:row="item">
                <img :data-src="item.src" />
            </slot>
        </li>
    </ul>
    <div class="loading">加载中...</div>
</template>

<script lang="ts">
import { Device } from '@/utils';
import { Vue, Options, Prop, Ref, Watch } from 'vue-property-decorator';

interface IImag {
    src: string;
    href: string;
    info: string;
    headerText?: string;
    _height?: number;
    _error?: boolean;
}

const imgsArr: IImag[] = [
    {
        src: "https://t7.baidu.com/it/u=2621658848,3952322712&fm=193&f=GIF",
        href: "https://www.baidu.com",
        info: "我是第一张图片",
        headerText: '测试'
    },
    {
        src: "https://t7.baidu.com/it/u=3631608752,3069876728&fm=193&f=GIF",
        href: "https://www.baidu.com",
        info: "一些图片描述文字asdasdasdasdasdasasdasd",
        headerText: '测试'
    },
    {
        src: "https://t7.baidu.com/it/u=2363269992,3614579621&fm=193&f=GIF",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },
    {
        src: "https://t7.baidu.com/it/u=3357675082,868315873&fm=193&f=GIF",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },

    {
        src: "https://t7.baidu.com/it/u=2783075563,3362558456&fm=193&f=GIF",

        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },
    {
        src: "https://t7.baidu.com/it/u=3355440349,3059059541&fm=193&f=GIF",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },
    {
        src: "https://t7.baidu.com/it/u=3845711835,2941194261&fm=193&f=GIF",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },
    {
        src: "https://t7.baidu.com/it/u=2615688296,4269099018&fm=193&f=GIF",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },
    {
        src: "https://t7.baidu.com/it/u=3355440349,3059059541&fm=193&f=GIF",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },
    {
        src: "https://t7.baidu.com/it/u=3845711835,2941194261&fm=193&f=GIF",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },
    {
        src: "https://t7.baidu.com/it/u=2615688296,4269099018&fm=193&f=GIF",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },
];

@Options({})
export default class YourComponent extends Vue {
    @Prop(Array) source
    @Prop({ default: 'default value', type: String }) propB
    @Prop([String, Boolean]) propC

    @Ref('waterfall') readonly waterfallRef!: HTMLDivElement
    @Ref('waterfallItem') readonly waterfallItemRef!: HTMLDivElement[]

    imgsArr = imgsArr
    imgsArr_c = [] // 渲染的图片
    imgCol = 4 // 图片列数
    imgGap = 10 // 图片间间隔
    loadedCount = 0
    waterfallItemEls: HTMLDivElement[] // 所有 waterfall-item 元素
    beginIndex = 0
    colsHeightArr = [] // 保存当前每一列的高度
    reachBottomDistance = 50 // 滚动触底距离，触发加载新图片
    viewHeight = 0 // 窗口视图大小


    get isMobile() {
        return Device.isMobile;
    }
    // 容器 waterfall 的宽度
    get waterfallWidth() {
        return this.waterfallRef.clientWidth;
    }
    // 图片宽度
    get imgWidth() {
        return this.colWidth - 2 * this.imgGap;
    }
    // 列宽度
    get colWidth() {
        return this.waterfallWidth / this.colNum;
    }
    // 列数
    get colNum() {
        return this.isMobile ? 2 : this.imgCol;
    }

    mounted() {
        this.viewHeight = (document.documentElement.clientHeight == 0) ? document.body.clientHeight : document.documentElement.clientHeight;
        this.preLoad();
        this.scroll();
    }

    @Watch('imgsArr')
    onImgsArrChanged(newVal) {
        if (this.imgsArr_c.length > newVal.length || (this.imgsArr_c.length > 0 && newVal[0] && !newVal[0]._height))
            this.reset();
        this.preLoad();
    }

    // 预加载 设置图片宽高
    preLoad() {
        // forEach 无法通过 item 直接修改数组元素，需用数组下标修改
        this.imgsArr.forEach((item, index) => {
            if (index < this.loadedCount)
                return;
            if (!item.src) {
                this.imgsArr[index]._height = 0;
                ++this.loadedCount;
                if (this.imgsArr.length === this.loadedCount) {
                    this.preloaded();
                }
            } else {
                // console.log(this.waterfallItemRef);

                let img = new Image();
                img.src = item.src;
                img.onload = img.onerror = (e: Event) => {
                    // 若加载失败则设置图片高度与宽度一致，加载成功则动态计算图片高度
                    this.imgsArr[index]._height = e.type === "load" ? Math.round(this.imgWidth * (img.height / img.width)) : this.imgWidth
                    if (e.type === "error") {
                        this.imgsArr[index]._error = true;
                    }
                    ++this.loadedCount;
                    if (this.imgsArr.length === this.loadedCount) {
                        this.preloaded();
                    }
                }
            }
        })
    }

    preloaded() {
        this.imgsArr_c = [].concat(this.imgsArr);
        this.$nextTick(() => {
            this.waterfall();
        });
    }

    // waterfall 布局
    waterfall() {
        // 等到整个视图都渲染完毕再执行
        this.waterfallItemEls = this.waterfallItemRef;
        if (!this.waterfallItemEls)
            return;
        let top, left, height;
        if (this.beginIndex === 0)
            this.colsHeightArr = []
        for (let i = this.beginIndex; i < this.waterfallItemEls.length; ++i) {
            if (!this.waterfallItemEls[i])
                return;
            height = this.waterfallItemEls[i].offsetHeight + 2 * this.imgGap;
            // console.log('height>>>>>>', this.waterfallItemEls[i].clientHeight);

            // 第一行
            if (i < this.colNum) {
                this.colsHeightArr.push(height);
                top = 0;
                left = i * this.colWidth;
            } else {
                // 找到最低的高度和其索引
                let minHeight = Math.min.apply(null, this.colsHeightArr);
                let minIdx = this.colsHeightArr.indexOf(minHeight);
                top = minHeight;
                left = minIdx * this.colWidth;
                this.colsHeightArr[minIdx] += height;
            }
            // 设置 waterfall-item 位置
            this.waterfallItemEls[i].style.top = top + "px";
            this.waterfallItemEls[i].style.left = left + "px";
            // 当前图片在窗口内，则加载
            if (top < this.viewHeight) {
                let imgEl = this.waterfallItemEls[i].children[0] as HTMLImageElement;
                imgEl.src = imgEl.getAttribute("data-src");
                imgEl.style.opacity = '1';
                imgEl.style.transform = "scale(1)";
            }
        }
        this.beginIndex = this.waterfallItemEls.length;
    }

    reset() {
        this.imgsArr_c = [];
        this.beginIndex = 0;
        this.loadedCount = 0;
    }

    /**
     * 滚动触底事件
     */
    scrollFn() {
        let minHeight = Math.min.apply(null, this.colsHeightArr);
        // 滚动条滚动的高度
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        // 到达最底层的高度最低的一列，则触发 moreData 方法
        if (
            scrollTop + this.viewHeight >
            minHeight - this.reachBottomDistance
        ) {
            this.moreData();
        }
        // 图片懒加载
        this.waterfallItemEls.forEach((r) => {
            let imgEl = r.children[0] as HTMLImageElement;
            // 若已加载，则跳过
            if (imgEl.src)
                return;
            // 当前图片所处的高度
            let topstr = r.style.top;
            const top = Number.parseFloat(topstr.slice(0, topstr.length - 2));
            // 图片已到达可视范围，则加载
            if (scrollTop + this.viewHeight > top) {
                imgEl.src = imgEl.getAttribute("data-src");
                imgEl.style.opacity = '1';
                imgEl.style.transform = "scale(1)";
            }
        })
    }

    /**
     * 滚动监听
     */
    scroll() {
        // window.onscroll = this.throttle(this.scrollFn, 500);
        this.waterfallRef.onscroll = this.throttle(this.staScrollFun, 500);

    }

    /**
     * 加载更多数据
     */
    moreData() {
        this.imgsArr = this.imgsArr.concat(this.imgsArr);
    }

    staScrollFun() {
        const { offsetHeight, scrollTop, scrollHeight } = this.waterfallRef;
        if (offsetHeight + scrollTop >= scrollHeight) {
            //触发事件
            console.log('滚动触底...');
            // this.moreData()
        }
    }


    /**
     * 节流函数
     */
    throttle(fn, time) {
        let canRun = true;
        return function () {
            if (!canRun)
                return;
            canRun = false;
            setTimeout(() => {
                fn.apply(this);
                canRun = true;
            }, time)
        }
    }
}

</script>

<style lang="scss" scoped>
#waterfall {
    width: 100%;
    height: 100%;
    position: relative;
    margin: 0;
    overflow: auto;

    @keyframes show-card {
        0% {
            transform: scale(0.5);
        }

        100% {
            transform: scale(1);
        }
    }

    .waterfall-item {
        width: 100%;
        position: absolute;
        border-radius: 10px;
        margin: 0;
        // padding: 5px;
        // padding-left: 0;

        img {
            width: 100%;
            border-radius: 10px;
            opacity: 0;
            transform: scale(0.5);
            transition: all 0.6s;
            transition-delay: 0.1s;
        }
    }

    .default-card-animation {
        animation: show-card 0.4s;
        transition: left 0.6s top 0.6s;
        transition-delay: 0.1s;
    }
}

.loading {
    height: 40px;
    background-color: rgb(126, 164, 245);
}
</style>