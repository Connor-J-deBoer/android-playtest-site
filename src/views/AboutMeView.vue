<script setup>
import '../assets/explainer.css'
</script>

<template>
  <div class="main">
    <br />
    <h2>The team*</h2>
    <p class="description">This is a project started by me, Connor deBoer, for fun in late spring 2024 as a way to keep sharp while the industry goes through its current crisis. Since then I've had a couple of friends express interest in helping me out with art and sound and business. As of now I only have one official team mate named Maggie Smith.</p>
    <h2>Programmer -- Connor</h2>
    <div class="connor"></div>
    <h2>Technical Artist -- Maggie</h2>
    <div class="maggie"></div>
  </div>
</template>

<style scoped>
h2
{
  text-wrap: nowrap;
}

.main
{
  margin-top: 175px;
}
.connor
{
  background-image: url('/Images/Face.png');
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 8px;

  width: 100px;
  height: 100px;
}

.maggie
{
  background-image: url('/Images/Maggie_Picture.png');
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 8px;

  width: 100px;
  height: 100px;
}
</style>