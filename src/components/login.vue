<template>
  <div>
    <h1>{{archer}}</h1>
    <ul>
      <Admin v-for="(person,index) in persons" :key='person.id' :person="person"/>
    </ul>
  </div>
</template>

<script>
import Admin from './admin'
export default {
  data() {
    return {
      // archer:'saber',
      persons:[
        {id:1,name:saber,age:11,sex:'男'}
        {id:2,name:lancer,age:12,sex:'女'}
        {id:3,name:archer,age:13,sex:'男'}
        {id:4,name:caster,age:14,sex:'女'}
      ]
    }
    
  },
  components:{
    Admin
  }
}
</script>

<style>
  /* div{
    width: 200px;
    height: 200px;
    background-color: red
  } */
</style>

