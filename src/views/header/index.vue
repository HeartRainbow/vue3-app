<template>
    <div class="header">
        <div class="header-nav">
            <h1>Rainbow</h1>
            <h2>JOIN US</h2>
        </div>
        <div class="header-main">
            <el-input v-model="keyword" placeholder="Please input" />
        </div>
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