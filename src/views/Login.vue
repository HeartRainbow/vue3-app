<template>
    <div class="wrap">
      <div class="form">
        <div class="left">
          <video src="../assets/video.mp4" muted loop autoplay></video>
        </div>
        <div class="right">
          <div class="right-con">
            <h1>NEW HERE SIGN UP</h1>
            <h3>NAME</h3>
            <input class="text" type="text" />
            <h3>EMAIL</h3>
            <input class="text" type="text" />
            <h3>PASSWORD</h3>
            <input class="text" type="password" />
            <input class="btn" type="submit" value="LOGIN" />
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {
    }
})
export default class Login extends Vue {
    setup() { }
}
</script>


<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow: hidden;
}

.wrap {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    to left top,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
}

.form {
  width: 50vw;
//   height: 560px;
  min-height: 50%;

  display: flex;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
}

.left {
  width: 55%;
//   height: 560px;
}

.left video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.right {
  width: 45%;
//   height: 560px;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-con {
  width: 70%;
  display: flex;
  flex-direction: column;
  text-align: center;
}

h1 {
  font-size: 26px;
  color: #70b4e3;
  font-weight: 400;
  padding-bottom: 10px;
}

h3 {
  font-size: 12px;
  font-weight: 400;
  color: #70b4e3;
  padding: 20px 0 10px 0;
  text-align: left;
}

.text {
  width: 100%;
  height: 40px;
  font-size: 20px;
  outline: none;
  border: none;
  border-bottom: 1px solid #70b4e3;
  color: #366ae6;
  background-color: rgba(0, 0, 0, 0);
}

.btn {
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-top: 50px;
  background-image: linear-gradient(120deg, #76daec 0%, #c5a8de 100%);
}

.btn:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

</style>