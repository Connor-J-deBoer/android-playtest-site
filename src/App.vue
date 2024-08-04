<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LogoView from './views/LogoView.vue'
</script>

<template>
  <LogoView />
  
  <div class="nav-wrapper">
    <nav>
      <RouterLink to="/">About Game</RouterLink>
      <RouterLink to="/me">About BBG</RouterLink>
      <RouterLink to="/download">Download Game</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped>
.nav-wrapper
{
  position: relative;
  top: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

nav a.router-link-exact-active 
{
  color: var(--color-background);
  background-color: #7ad6f4;
}

nav a 
{
  display: inline-block;
  padding: 0 5px;
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
  border-radius: 8px;
  font-family: 'Gochi Hand';
}
</style>
