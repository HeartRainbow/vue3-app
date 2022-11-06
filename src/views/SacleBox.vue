
<template>
    <div class="ScaleBox" ref="ScaleBox" :style="{
        width: width + 'px',
        height: height + 'px',
    }">
        <slot>
            <div className="screen-wrapper">
                <div className="screen" id="screen">
                    <div class="section">A</div>
                    <div class="section">B</div>
                    <div class="section">C</div>
                    <div class="section">D</div>
                    <div class="section">E</div>
                </div>
            </div>
        </slot>
    </div>
</template>

<script>
export default {
    name: "ScaleBox",
    props: {},
    data() {
        return {
            scale: 0,
            width: 1920,
            height: 1080,
        };
    },
    mounted() {
        this.setScale();
        window.addEventListener("resize", this.debounce(this.setScale));
    },
    methods: {
        getScale() {
            // console.log(window.screen, window.availHeight);

            console.log(document.documentElement.clientWidth, document.documentElement.clientHeight);
            // console.log(window.innerWidth, window.innerHeight,);
            const { width, height } = this;
            // const wh = window.innerHeight / height;
            // const ww = window.innerWidth / width;
            const wh = document.documentElement.clientHeight / height;
            const ww = document.documentElement.clientWidth / width;
            console.log(ww < wh ? ww : wh);
            return ww < wh ? ww : wh;
        },
        setScale() {
            this.scale = this.getScale();
            if (this.$refs.ScaleBox) {
                this.$refs.ScaleBox.style.setProperty("--scale", this.scale);
            }
        },
        debounce(fn, delay) {
            const delays = delay || 500;
            let timer;
            return function () {
                const th = this;
                const args = arguments;
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(function () {
                    timer = null;
                    fn.apply(th, args);
                }, delays);
            };
        },
    },
};
</script>

<style lang="scss" scoped>
#ScaleBox {
    --scale: 1;
}

.ScaleBox {
    position: absolute;
    transform: scale(var(--scale)) translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    transform-origin: 0 0;
    left: 50%;
    top: 50%;
    transition: 0.3s;
    z-index: 999;
    background: rgba(255, 0, 0, 0.3);
}

$design_width: 1920px; //设计稿的宽度，根据实际项目调整
$design_height: 1080px; //设计稿的高度，根据实际项目调整

.screen-wrapper {
    height: 100%;
    width: 100%;
    background-color: aqua;

    .screen {
        display: inline-block;
        width: $design_width;
        height: $design_height;
        background: yellow;

        .section {
            height: 200px;
            width: 200px;
            outline: 1px solid #ddd;
            line-height: 200px;
            font-size: 40px;
            text-align: center;
            display: inline-block;
        }
    }
}
</style>
