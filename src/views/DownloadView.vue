<script setup>
import '../assets/explainer.css'
</script>

<template>
  <div class="main">
    <br />
    <p class="description">The prototype is only available on android phones, this will hopefully change by the time of the full release but for now we're limited</p>
    <br />
    <p class="description">You will Probably get some warnings, ignore these, trust me, please</p>
    <br />
    <p>▼click the image below to download the prototype▼</p>
    <a href="/Build/Build.apk">
      <div class="game-logo"></div>
    </a>
  </div>
</template>

<style scoped>
.main
{
  margin-top: 175px;
}
.game-logo
{
  animation-name: grow-shrink;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-top: -50px;
}

@keyframes grow-shrink
{
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
</style>