<template>
    <div v-show="modelValue" class="hh-dialog-warpper">
        <div class="hh-dialog-inner">
            <div class="hh-dialog-box border-radius" :style="`width:${width}`">
                <div>
                    <slot name="headerContent" />
                    <div class="hh-dialog-header" v-if="showHeaderResult">
                        <span class="hh-dialog-title">
                            {{ title }}
                        </span>
                        <el-icon class="hh-dialog-close" v-if="showClose" @click="onClickCancelButton">
                            <Close />
                        </el-icon>
                    </div>
                </div>

                <div class="hh-dialog-body">
                    <slot>This is message</slot>
                </div>

                <div>
                    <slot name="footerContent" />
                    <div class="hh-dialog-footer" v-if="showFooterResult">
                        <el-button v-if="showCancelButton" @click="onClickCancelButton" type="text">
                            {{ cancelText }}
                        </el-button>
                        <el-button v-if="showConfirmButton" @click="onClickConfirmButton">
                            {{ confirmText }}
                        </el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { ComponentInternalInstance, getCurrentInstance, ref } from 'vue'

export default {
    props: {
        // dialog标题
        title: {
            required: false,
            default: 'Tips',
            type: String
        },
        // dialog 是否出现
        modelValue: {
            required: false,
            default: false,
            type: Boolean
        },
        // cancel 按钮的文字
        cancelText: {
            required: false,
            default: '取消',
            type: String
        },
        // confirm按钮的文字
        confirmText: {
            required: false,
            default: '确认',
            type: String
        },
        // 是否需要头部 头部包含关闭按钮 默认为true
        showHeader: {
            required: false,
            default: true,
            type: Boolean
        },
        // 是否需要footer 默认为true 如果为false confirm 和 concel按钮将会消失
        showFooter: {
            required: false,
            default: true,
            type: Boolean
        },
        // 是否需要close 默认true 如果为false右上角的关闭x将不显示
        showClose: {
            required: false,
            default: true,
            type: Boolean
        },
        // 是否需要cancel按钮 默认为true 如果为false,cancel按钮将不会显示
        showCancelButton: {
            required: false,
            default: true,
            type: Boolean
        },
        // 是否需要confirm按钮 默认为true 如果为false,confir按钮将不会显示
        showConfirmButton: {
            required: false,
            default: true,
            type: Boolean
        },
        // 自定义宽度 默认auto
        width: {
            required: false,
            default: 'auto',
            type: String
        }
    },
    components: {
    },
    setup(propsData, ctx) {
        const currentInstance: ComponentInternalInstance | null = getCurrentInstance()

        function onClickCancelButton(e: Event) {
            currentInstance?.emit('cancel', e)
            ctx.emit('update:modelValue', !propsData.modelValue);
        }

        function onClickConfirmButton(e: Event) {
            currentInstance?.emit('confirm', e)
        }

        // 自定义尾部
        const showFooterResult = ref(propsData.showFooter)
        const footerContent = currentInstance?.slots.footerContent

        if (footerContent) {
            showFooterResult.value = false
        }

        // 自定义头部
        const showHeaderResult = ref(propsData.showHeader)
        const headerContent = currentInstance?.slots.headerContent

        if (headerContent) {
            showHeaderResult.value = false
        }

        return {
            showHeaderResult,
            showFooterResult,
            onClickCancelButton,
            onClickConfirmButton
        }
    }
}
</script>
  
<style lang="scss" scoped>
.hh-dialog-warpper {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    user-select: none;

    .hh-dialog-inner {
        display: table-cell;
        width: 100vw;
        height: 100vh;
        text-align: center;
        vertical-align: middle;
        
        
        .hh-dialog-box {
            // width: 460px;
            display: inline-block;
            padding: 24px 24px 12px 24px;
            background: #ffffff;
            text-align: left;
            border-radius: 4px;
        }

        .hh-dialog-body {
            min-height: 100px;
            margin: 20px;
        }
    }

    .hh-dialog-header {
        position: relative;
        display: flex;
        align-items: center;

        .hh-dialog-title {
            width: calc(100% - 30px);
        }

        .hh-dialog-close {
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
                transform: rotate(90deg);
            }
        }
    }

    .hh-dialog-footer {
        text-align: right;
    }
}
</style>
  