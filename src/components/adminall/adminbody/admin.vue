<template>
  <div class="adminbody">
    <AdminNav v-for="(person,index) in persons" :key='person.id' :person="person"/>
  </div>
</template>

<script>
import AdminNav from '../adminNav/adminNav'
export default {
  data(){
    return{
      persons:[
        {id:1,name:'saber',age:11,sex:'男'},
        {id:2,name:'lancer',age:12,sex:'女'},
        {id:3,name:'archer',age:13,sex:'男'},
        {id:4,name:'caster',age:14,sex:'女'}
      ]
    }
  },
  components:{
    AdminNav
  }
}
</script>

<style scoped>
  .adminbody{
    width: 100%;
    height: 100%;
    background-image: url('../../../assets/imgs/bgadmin.jpg');
    background-position: center;
    background-size: 2560px;
  }
</style>

