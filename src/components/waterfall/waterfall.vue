<template>
    <div class="waterfall" id="waterfall" ref="waterfall">
        <div class="waterfall-item default-card-animation" v-for="(item, index) in imgsArr_c" :key="index"
            :style="{ width: imgWidth + 'px', height: item._height + 'px' }" ref="waterfallItem">
            <img :data-src="item.src" />
        </div>
    </div>
</template>

<script lang="ts">
import { isMobile } from '@/utils';
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
        src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20190210%2F8534c3170a314d83b104d04aa120a040.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440861&t=d15af814c4ae34b95bc60e35efc88e4c",
        href: "https://www.baidu.com",
        info: "我是第一张图片",
        headerText: '测试'
    },
    {
        src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.desktx.com%2Fd%2Ffile%2Fwallpaper%2Fanimals%2F20160822%2F05128add3de7bc5acfa3a38612673e1d.jpg&refer=http%3A%2F%2Fwww.desktx.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440861&t=667c221c38da5abdb0ed7d34d87ef564",
        href: "https://www.baidu.com",
        info: "一些图片描述文字asdasdasdasdasdasasdasd",
        headerText: '测试'
    },
    {
        src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.yidianzhidao.com%2FUploadFiles%2Fimg_1_1195934273_1809290298_26.jpg&refer=http%3A%2F%2Fwww.yidianzhidao.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440861&t=220f9c21856a2bb0cc71f76ba0b5e2cc",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },
    {
        src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201508%2F10%2F20150810150356_hnves.thumb.400_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440861&t=0971bf1e69ad8e180fb704140d7a29b0",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },

    {
        src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180211%2F01%2F1518282902-iSBdILoxsY.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440861&t=c4c6cd3890f420680e5db7f92a8d543c",

        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },
    {
        src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190504%2F20%2F1556972126-MAGsvFyfEd.png&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440861&t=4ecd99f7107e39197378a2b7a04176c6",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },
    {
        src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0506%2Ff43b5bab036349f7b4ffdef661da97a8.jpg&refer=http%3A%2F%2Ffile06.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440861&t=fd805292f3f72e9d7ba51fc9f45245ea",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },
    {
        src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F3%2F5a%2Ffe101126073_250_350.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440861&t=72446335a210920f58bf6c6e6a106abe",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },
    {
        src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbos.pgzs.com%2Frbpiczy%2FWallpaper%2F2015%2F1%2F22%2Fe975967d962e45a7af2863060371d81c-12.jpg&refer=http%3A%2F%2Fbos.pgzs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440861&t=775ff5be8b8b1e9abc8848ff575e437d",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },
    {
        src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-11%2F2017110816281636782.jpg&refer=http%3A%2F%2Fpic.qqtn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440862&t=36bd6acad4963ad2d153b3a4e220a363",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },
    {
        src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190624%2F14%2F1561358677-yVQerfxNJO.jpeg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440862&t=25e73d0d95ee43d9b160bd0dfe24aa38",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },
    {
        src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180211%2F01%2F1518282942-vBSpHErLKP.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440862&t=809ae8cf1c654bb83dbbab9437b8e276",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },
    {
        src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.ivsky.com%2Fimg%2Ftupian%2Fpre%2F201611%2F09%2Fsugelan_zheer_mao-002.jpg&refer=http%3A%2F%2Fimg.ivsky.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638440862&t=962fa67d0f3fff40553440ccb8b06ec4",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },
    {
        src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h399%2F20180301%2F9ce9-fwnpcns9232331.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638441157&t=46c567a84e0172aa430f0d058ba9a92f",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },
    {
        src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h640%2F20180109%2F9e54-fyqnici8428669.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638441197&t=70f9aec9253df0dcea506df28938327a",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },

    {
        src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.euro-premium.cn%2Fsites%2Fdefault%2Ffiles%2F2017%2F12%2F2017-12-18-609.jpg&refer=http%3A%2F%2Fwww.euro-premium.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638441197&t=e67e19c5e29ebd66265d2ed779359002",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },
    {
        src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-2816258155-A3E56E8F829BF213072E703F23FC3DC1%2F0%3Ffmt%3Djpg%26size%3D21%26h%3D550%26w%3D410%26ppv%3D1.jpg&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638441314&t=def05d46f7dee911d2a2a8bb306976d5",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },
    {
        src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.euro-premium.cn%2Fsites%2Fdefault%2Ffiles%2F2017%2F09%2F2017-09-30-110.jpg&refer=http%3A%2F%2Fwww.euro-premium.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638441314&t=d4d758316d5f48f3800b59a2eec7dc46",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    },
    {
        src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.goupuzi.com%2Fnewatt%2FMon_2004%2F1_183281_b959196b41fb01e.jpg&refer=http%3A%2F%2Fwww.goupuzi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638441314&t=663a187a9631164c450e2b3b3e1b8d92",
        href: "https://www.baidu.com",
        info: "一些图片描述文字",
    }
];

@Options({})
export default class YourComponent extends Vue {
    @Prop(Number) propA;
    @Prop({ default: 'default value', type: Number }) propB;
    @Prop([String, Boolean]) propC;

    @Ref('waterfall') readonly waterfallRef!: HTMLDivElement;
    @Ref('waterfallItem') readonly waterfallItemRef!: HTMLDivElement[];

    imgsArr = imgsArr;
    imgsArr_c = [] // 渲染的图片
    imgCol = 5 // 图片列数
    imgGap = 5 // 图片间间隔
    loadedCount = 0
    waterfallItemEls: HTMLDivElement[] // 所有 waterfall-item 元素
    beginIndex = 0
    colsHeightArr = [] // 保存当前每一列的高度
    reachBottomDistance = 20 // 滚动触底距离，触发加载新图片
    viewHeight = 0 // 窗口视图大小


    get isMobile() {
        return isMobile();
    }
    // 容器 waterfall 的宽度
    get waterfallWidth() {
        console.log(this.waterfallRef);
        
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
            height = this.waterfallItemEls[i].offsetHeight;
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
    // 滚动触底事件
    scrollFn() {
        let minHeight = Math.min.apply(null, this.colsHeightArr);
        // 滚动条滚动的高度
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        // 到达最底层的高度最低的一列，则触发 handleReachBottom 方法
        if (
            scrollTop + this.viewHeight >
            minHeight - this.reachBottomDistance
        ) {
            this.handleReachBottom();
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
    scroll() {
        window.onscroll = this.throttle(this.scrollFn, 500);
    }
    handleReachBottom() {
        this.imgsArr = this.imgsArr.concat(this.imgsArr);
    }
    // 节流函数
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
    position: relative;

    @keyframes show-card {
        0% {
            transform: scale(0.5);
        }

        100% {
            transform: scale(1);
        }
    }

    .waterfall-item {
        position: absolute;
        border-radius: 10px;
        padding: 5px;
        padding-left: 0;


        img {
            width: 100%;
            border-radius: 10px;
            opacity: 0;
            transform: scale(0.5);
            transition: all 0.6s;
            transition-delay: 0.1s;
        }
    }

    /* .default-card-animation {
      animation: show-card 0.4s;
      transition: left 0.6s top 0.6s;
      transition-delay: 0.1s;
    } */

}
</style>