<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';
import Card from '@/components/Card.vue';

@Options({
  components: {
    HelloWorld,
    Card
  }
})
export default class Home extends Vue {
  setup() {
    return {};
  }
}
</script>
