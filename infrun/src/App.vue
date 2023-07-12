<script setup>
import { RouterView } from 'vue-router'
import ToolBar from './components/ToolBar.vue'

</script>

<template>
  <div>
    <div id="nav">
      <ToolBar/>
    </div>
    <transition name="page">
      <RouterView />
    </transition>
  
  </div>

  
</template>
<style scoped>
a {
  text-decoration: none;
}
a:hover{
  color : #42b883;
}
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

