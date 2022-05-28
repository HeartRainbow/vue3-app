<template>
  <div>
    <p data-testid="clicked" data-test="clicked">Times clicked: {{ count }}</p>
    <button data-testid="increment" data-test="increment" @click="increment">
      increment
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IncrementDemo",
  setup() {
    const count = ref(0);

    return {
      count,
      increment: () => {
        count.value += 1;
      },
    };
  },
});
</script>