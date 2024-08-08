<template>
  <div class="logo-wrapper-wrapper">
    <div class="logo-wrapper">
      <div class="logo"></div>
      <div class="title-wrapper">
        <h1 class="title">Berta Boy</h1>
        <h1 class="title" style="font-size: 70px;">Games</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>

.logo-wrapper-wrapper
{
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width:100vw;
}

.logo-wrapper
{
  z-index: 1;
  display: flex;
  flex-direction: row;
  top: 0;
  left: 0;
  margin-left: -55px;
}

.logo 
{
  z-index: 1;
  top: 0;
  left: 0;
  background-image: url('../Images/Berta_Boy_Games_Logo_Transparent.png');
  background-repeat: no-repeat;
  background-size: 100%;
  image-rendering: crisp-edges;
  width: 200px;
  height: 200px;
}

.title-wrapper
{
  z-index: 1;
  margin-top: 35px;
}

.title
{
  z-index: 1;
  font-size: 50px;
  font-family: 'Permanent Marker';
  margin-bottom: -45px;
  margin-left: -45px;
  color: #fff;
  white-space: nowrap;
}
</style>