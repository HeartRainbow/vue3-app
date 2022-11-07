<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      scale: 0,
      width: 1920,
      height: 1080,
    }
  },
  mounted() {
    this.setScale();
    window.addEventListener("resize", this.debounce(this.setScale));
  },
  methods: {
    getScale() {
      const { width, height } = this;
      const wh = window.innerHeight / height;
      const ww = window.innerWidth / width;
      // const wh = document.documentElement.clientHeight / height;
      // const ww = document.documentElement.clientWidth / width;
      // return ww < wh ? ww : wh;
      return ww;
    },
    setScale() {
      this.scale = this.getScale();
      document.querySelector('body').style.setProperty("--scale", this.scale);
    },
    debounce(fn, delay = 500) {
      let timer;
      return function () {
        const th = this;
        const args = arguments;
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(function () {
          timer = null;
          fn.apply(th, args);
        }, delay);
      };
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/common.scss';

#app {
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// a {
//   color: #42b983;
// }
</style>
