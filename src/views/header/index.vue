<template>
    <div class="header">
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal" background-color="#545c64"
            text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
            <el-menu-item index="1">Processing Center</el-menu-item>
            <el-sub-menu index="2">
                <template #title>Workspace</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-sub-menu index="2-4">
                    <template #title>item four</template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                    <el-menu-item index="2-4-2">item two</el-menu-item>
                    <el-menu-item index="2-4-3">item three</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="3" disabled>Info</el-menu-item>
            <el-menu-item index="4">Orders</el-menu-item>
        </el-menu>
    </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator';

@Options({})
export default class Header extends Vue {
    @Prop(Number) propA;
    @Prop({ default: 'default value', type: Number }) propB;
    @Prop([String, Boolean]) propC;

    keyword = '';

    handleSelect(key: string, keyPath: string[]) {
        console.log(key, keyPath)
    }

}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 100%;

    &-nav {
        padding: 0 20px;
        background-color: darkgoldenrod;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #ffffff;
    }

}
</style>