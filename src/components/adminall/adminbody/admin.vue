<template>
  <div class="adminbody">
    <h1>{{person.id}} ---- {{person.name}}</h1>
  </div>
</template>

<script>
export default {
  props:['person']
}
</script>

<style scoped>
  .adminbody{
    width: 100%;
    height: 100%;
    color: red;
    background-image: url('../../../assets/imgs/bgadmin.jpg');
    background-position: center;
    background-size: 2560px;
  }
</style>

