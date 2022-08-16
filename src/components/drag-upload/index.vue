<template>
    <div class="drag-container">
        <div class="drag" :class="{ dragIn: dragIn }" @dragover="fileDragover" @drop="fileDrop"
            @dragleave="fileDragleave">
            <div class="drag-tips">
                <span>将文件拖拽至此，或</span>
                <label for="fileInput" style="color: #11a8ff; cursor: pointer">{{ fileList.length > 0 ? '上传更多' : '点此上传'
                }}</label>
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
    @Prop(Number) propA
    @Prop({ default: 'default value', type: Number }) propB
    @Prop([String, Boolean]) propC

    dragIn = false

    fileList = []

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
        console.log(files);
        this.fileList = this.pathGenerate(files)

        this.dragIn = false;
    }

    /**
     * 创建临时路径
     */
    pathGenerate(files) {
      const tempFileList = files.map(item => {
        const tempFile: any = new File([item], item.name)
        tempFile.url = this.getObjectUrl(item)
        // tempFile.componentName = resultComponent(item)
        return tempFile
      })
      return tempFileList
    }

    /**
     * 创建文件URL临时路径
     */
    getObjectUrl(file) {
      let url = null
      if ((window as any).createObjectURL != undefined) {
        // basic
        url =(window as any).createObjectURL(file)
      } else if (window.webkitURL != undefined) {
        // webkit or chrome
        url = window.webkitURL.createObjectURL(file)
      } else if (window.URL != undefined) {
        // mozilla(firefox)
        url = window.URL.createObjectURL(file)
      }
      return url
    }
}
</script>

<style lang="scss" scoped>
.drag {
    height: 200px;
    width: 300px;
    border: dashed 1px rgb(150, 150, 150);
    color: #777;
    border-radius: 7px;
    overflow: hidden;

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