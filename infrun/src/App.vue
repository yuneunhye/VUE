<script setup>
import { RouterView } from 'vue-router'
import ToolBar from './components/ToolBar.vue'

</script>

<template>
  <div>
    <div id="nav">
      <ToolBar/>
    </div>
  <RouterView />
  </div>

  
</template>

