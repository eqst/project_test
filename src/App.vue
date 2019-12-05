<template>
  <div>
    <header>{{saber}}</header>
    <div><Login/></div>
  </div>
</template>

<script type = "text/ecmascript-6">
import Login from "./components/login"
export default {  //配置对象
  data() {
    return {
      saber:'saber'
    }
  },
  components:{
    Login
  }
}
</script>

<style>
 
</style>