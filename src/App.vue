<template>
  <div class="app">
    <Login/>
    <ul>
      <Admin v-for="(person,index) in persons" :key='person.id' :person="person"/>
    </ul>
  </div>
</template>

<script type = "text/ecmascript-6">
import Login from "./components/loginall/loginbody/login"
import Admin from "./components/adminall/adminbody/admin"
import './css/reset.css';
export default {  //配置对象
  data() {
    return {
      persons:[
        {id:1,name:'saber',age:11,sex:'男'},
        {id:2,name:'lancer',age:12,sex:'女'},
        {id:3,name:'archer',age:13,sex:'男'},
        {id:4,name:'caster',age:14,sex:'女'}
      ]
    }
  },
  components:{
    Login,
    Admin
  }
}
</script>

<style scoped>
  .app{
    margin: 0 auto;
    background-color: #f1f5f3;
    width: 80%;
    height: 100%;
  }
  
</style>