<script setup>
</script>

<template>
  <div class="main">
    <div class="game-logo"></div>
    <h2>The What</h2>
    <p class="description">Backyard Beat Up is a 3rd person 2D casual fighting mobile game in which everyone only has one hit point. You play as Devin Twan, a 5 year old younger brother looking to prove to his older brother (Cevin Twan, 7 years old) that he is the strongest in the house. Fight and beat all 4 of Cevin’s friends to work your way up to the biggest fight of your life (so far) and put Cevin in his place.</p>
    <h2>The How</h2>
    <p class="description">The player character will follow your figer along the screen, to just you have to swipe your finger up quickly, to attack you have to press a second figer on the screen</p>
    <h2>The Why</h2>
    <p class="description">A couple of friends need a project while the industry to recovers. We chose a mobile plateform because we wanted to be able to share our work with anyone at any time, </p>
  </div>
</template>

<style scoped>
.main
{
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.game-logo
{
  margin-top: -125px;
  margin-bottom: -10px;
  background-image: url("/public/Images/BackyardBeatupLogo.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 350px;
  height: 200px;
}

.description
{
  width: 300px;
  text-align: left;
}

h2
{
  font-family: 'Permanent Marker';
}

</style>