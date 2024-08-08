<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Logo from './components/Logo.vue'
</script>

<template>
  <header>
    <Logo />
  </header>
  
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
header
{
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-wrapper
{
  z-index: 0;
  position: fixed;
  top: 150px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
}

nav a.router-link-exact-active 
{
  color: var(--color-background);
  background-color: #f9a311;
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
