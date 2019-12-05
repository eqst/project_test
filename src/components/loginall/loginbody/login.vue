<template>
  <div class="loginbody">
    <header><Header/></header>
  </div>
</template>

<script>
import Header from '../header/header'
export default {
  components:{
    Header
  }
}
</script>

<style scoped>
  .loginbody{
    width: 100%;
    height: 100%;
    background-image: url('../../../assets/imgs/bglogin1.jpg');
    background-position: center;
    background-size: 2560px;
    overflow: hidden;
  }
</style>

