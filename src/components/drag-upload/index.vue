<template>
    <div class="drag-container">
        <!-- <div class="file-box" v-if="fileList.length">
            <div class="file-box-item" v-for="(item, index) in fileList" :key="index">
                <img :src="item.url" alt="">
            </div>
        </div> -->
        <div class="drag" :class="{ dragIn: dragIn }" @dragover="fileDragover" @drop="fileDrop"
            @dragleave="fileDragleave">
            <div class="file-box" v-if="fileList.length">
                <div class="file-box-item" v-for="(item, index) in fileList" :key="index">
                    <img :src="item.url" alt="">
                    <i class="del" @click="delFile(0)">×</i>
                </div>
            </div>
            <div class="drag-tips" v-else>
                <span>将文件拖拽至此，或</span>
                <label for="fileInput" style="color: #11a8ff; cursor: pointer">
                    {{ fileList.length > 0 ? '上传更多' : '点此上传' }}
                </label>
            </div>
        </div>
        <div class="footer">
            <input type="file" id="fileInput" style="display: none" v-bind="$attrs" @change="chooseFile" />
            <label for="fileInput" style="color: #11a8ff; cursor: pointer"> 选择文件 </label>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator';

@Options({})
export default class YourComponent extends Vue {
    @Prop(Number) propA;
    @Prop({ default: 'default value', type: Number }) propB;
    @Prop([String, Boolean]) propC;

    dragIn = false;
    fileList = [];

    /**
     * 点击选择文件
     */
    chooseFile(e) {
        let files = Array.from(e.target.files) // 获取到第一个上传的文件对象

        console.log(files);

        // 清空，防止上传后再上传没有反应
        e.target.value = '';
    }

    /**
     * 进入目标区域
     */
    fileDragover(e) {
        this.dragIn = true;
        e.preventDefault();
    }

    /**
     * 离开目标区域
     */
    fileDragleave() {
        this.dragIn = false;
    }

    /**
     * 拖拽文件进入放置目标时读取file对象
     */
    fileDrop(e) {
        e.preventDefault()
        let files = Array.from(e.dataTransfer.files);
        this.fileList = this.pathGenerate(files);

        this.dragIn = false;
    }

    /**
     * 创建临时路径
     */
    pathGenerate(files) {
        const tempFileList = files.map(item => {
            const tempFile: any = new File([item], item.name);
            tempFile.url = this.getObjectUrl(item);
            // tempFile.componentName = resultComponent(item)
            return tempFile;
        })
        return tempFileList;
    }

    /**
     * 创建文件URL临时路径
     */
    getObjectUrl(file) {
        let url = null
        if ((window as any).createObjectURL != undefined) {
            // basic
            url = (window as any).createObjectURL(file);
        } else if (window.webkitURL != undefined) {
            // webkit or chrome
            url = window.webkitURL.createObjectURL(file);
        } else if (window.URL != undefined) {
            // mozilla(firefox)
            url = window.URL.createObjectURL(file);
        }
        return url;
    }

    /**
     * 删除单个文件
     */
    delFile(i) {
      this.fileList.splice(i, 1);
    }
}
</script>

<style lang="scss" scoped>
.drag-container {
    .file-box {
        overflow: auto;
        // width: 800px;
        overflow: hidden;
        border-radius: 5px;
        // border: 1px solid #70bbf8;
        column-count: 3;
        -moz-column-count: 3;
        /* Firefox */
        -webkit-column-count: 3;
        /* Safari and Chrome */
        column-gap: 5px;

        &-item {
            position: relative;
            margin-bottom: 5px;
            font-size: 0;
            overflow: hidden;
            border-radius: 5px;

            img {
                width: 100px;
                object-fit: contain;
            }

            &:hover {
                opacity: 0.8;
            }

            .del {
                display: block;
                width: 20px;
                height: 20px;
                text-align: center;
                line-height: 20px;
                font-size: 16px;
                font-weight: bold;
                font-style: normal;
                color: #ffffff;
                background: rgba(0, 0, 0, 0.5);
                position: absolute;
                right: 0px;
                top: 0px;
                border-radius: 0px 0px 0px 50%;
                cursor: pointer;
                transition: 0.2s;

                &:hover {
                    background: rgba(255, 255, 255, 0.5);
                    color: #666666;
                }
            }
        }
    }
}

.drag {
    height: 200px;
    width: 300px;
    border: dashed 1px rgb(150, 150, 150);
    color: #777;
    border-radius: 7px;
    overflow: auto;

    &.dragIn {
        border: 2px dashed #30a2ff;
        filter: blur(1.2);
        background: rgba(191, 219, 250, 0.3);
    }

    &-tips {
        text-align: center;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>