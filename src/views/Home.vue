<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <Card />
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
export default class Home extends Vue {}
</script>
