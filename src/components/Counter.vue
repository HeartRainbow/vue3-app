<template>
  <div>
    <div>{{ computedCount }}</div>
    <button @click="inc">加</button>
    <button @click="dec">减</button>
    <button @click="reset">重置</button>
    <div>
      <button @click="userLogin">login</button>
      <input id="file" type="file" name="file" multiple @change="uploadFile($event)" >
    </div>
    <div>
     <!-- v-copy中就是要复制的内容 -->
      <p v-copy="'复制的内容'">复制内容</p>
    </div>
    <div>
      <div v-backtop="50"> 顶部1 </div>
      <div v-backtop:wu="50"> 顶部2 </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { login, uploadFile } from '../api';

export default defineComponent({
  name: 'IncrementDemo',
  props: {
    factor: { type: Number, default: 1 }
  },
  setup(props) {
    const count = ref(0);

    return {
      count,
      inc() {
        count.value++;

        console.log(this.$store.state.myModule.wheels);
      },
      dec() {
        count.value--;
      },
      reset() {
        count.value = 0;
      },
      userLogin() {
        login().then((r) => {
          console.log(r);
        });
      },
      uploadFile(e) {
        uploadFile(e).then((r) => {
        console.log(r);
        });
      },
      computedCount: computed(() => count.value * props.factor)
    };
  }
});
</script>
