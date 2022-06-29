<template>
  <div>
    <div>{{ computedCount }}</div>
    <button @click="inc">加</button>
    <button @click="dec">减</button>
    <button @click="reset">重置</button>
  </div>
  <div>
    <button @click="userLogin">login</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { login } from '../api';

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
        const res = login();
        console.log(
          res.then((r) => {
            console.log(r);
          })
        );
      },
      computedCount: computed(() => count.value * props.factor)
    };
  }
});
</script>
