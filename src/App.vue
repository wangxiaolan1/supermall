<template>
  <div id="app">
  <keep-alive  exclude="Detail.vue">
  	<router-view/>
  </keep-alive>
  	
  	<main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar'

export default {
  name: 'app',
  components: {
  	MainTabBar
  }
}
</script>

<style>
 @import "./assets/css/base.css";
 html{
   touch-action:none;
  }
</style>
