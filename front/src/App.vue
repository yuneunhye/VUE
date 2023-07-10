<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
  <header>
   
      <nav>
        <RouterLink to="/">Main</RouterLink> |
        <RouterLink to="/post">글쓰기</RouterLink> |
         <RouterLink to="/list">글목록</RouterLink>
      </nav>
  </header>

  <RouterView />
  </div>
</template>

<style scoped>

nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

</style>
