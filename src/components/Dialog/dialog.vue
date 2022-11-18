<script setup>
import { getCurrentInstance, nextTick, onMounted } from "vue";

const { proxy } = getCurrentInstance();

defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: ''
    },
    message: {
        type: String,
        default: ''
    },
    close: {
        type: Function,
        default: fun => fun()
    }
})

console.log(proxy);

onMounted(() => {
    const body = document.querySelector('body');
    nextTick
    if (body.append) {
        body.append(proxy.$el);
    } else {
        body.appendChild(proxy.$el);
    }
})

const emit = defineEmits(['update:modelValue'])

const handleClose = () => {
    emit('update:modelValue', false)
}
</script>

<template>
    <div v-if="modelValue" class="dialog-mask flex-center">
        <div class="dialog-box">
            <header class="dialog-header">{{ title }}</header>
            <slot>
                <p class="dialog-content">{{ message || 'This is message' }}</p>
            </slot>
            <div class="dialog-footer">
                <button class="button dialog-confirm" @click="close(handleClose)">確認</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.dialog-mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.dialog-box {
    background: #fff;
    width: 300px;
    border-radius: 10px;
    overflow: hidden;
}

.dialog-header {
    padding-top: 20px;
    font-weight: bold;
    text-align: center;
}

.dialog-content {
    padding: 5px 20px 20px 20px;
    font-size: 12px;
    text-align: center;
    white-space: pre-wrap;
    word-wrap: break-word;
}

.dialog-footer {
    display: flex;
    overflow: hidden;
    user-select: none;
    border-top: 1px solid #EBEDF0;
}

.button {
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    width: 100%;
    line-height: 40px;
    background-color: #fff;
    border: none;
}

.button:active {
    background-color: #f2f3f5;
}

.dialog-confirm {
    color: #409EFF;
}
</style>