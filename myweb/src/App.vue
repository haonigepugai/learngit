<template>
  <div id="app">
    
    <router-link to="/origin">首页</router-link>
    <hr>
    <h2> {{msg}}</h2>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
       msg: '根'
    }
  }
}
</script>

<style>

</style>
