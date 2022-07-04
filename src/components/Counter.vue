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
