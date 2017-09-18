<template>
  <div id="app">
  	<!-- <loading></loading> -->
    <!-- <add-blog></add-blog> -->
    <!-- <home></home> -->
    <!-- <list></list> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home'
import List from './components/List'
import Loading from './components/Loading'
export default {
  name: 'app',
  components: {
    Home,List,Loading
  }
}
</script>

<style scoped>
	
</style>
