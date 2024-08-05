<script setup>
import '../assets/explainer.css'
</script>

<template>
  <div class="main">
    <a href="/Build/Build.apk">
      <div class="game-logo"></div>
    </a>
    <p>↑↑ click the image above to download the game ↑↑</p>
  </div>
</template>

<style scoped>
.game-logo
{
  animation-name: grow-shrink;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes grow-shrink
{
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

a:hover
{
  cursor: pointer;
}
</style>