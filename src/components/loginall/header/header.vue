<template>
  <div class="headerall">
    
    <img class='Logo' src="../../../assets/imgs/topicon.jpg" alt="">
    {{saber}}
  </div>
</template>

<script type = "text/ecmascript-6">

export default {  //配置对象
  data () {
    return{
      saber:'The Elder Scrolls VI',
    }
  }
}
</script>

<style scoped>
  .headerall{
    display: flex;
    width: 100%;
    height: 80px;
    background-color: rgba(20, 100, 200, 0.5);
    align-items: center;
  }
  .Logo{
    margin: 0 20px;
    width: 100px;
    height: 60px;
    border-radius: 30px;
  }
</style>