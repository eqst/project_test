<template>
  <div>
    <ul>
      <h1>{{person.id}} -- {{person.name}}</h1>
    </ul>
  </div>
</template>

<script>
export default {
  props:['person']
}
</script>

<style scoped>
  ul{
    color: green
  }
</style>

