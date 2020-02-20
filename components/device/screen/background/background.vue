<script src="./background.js" />
<style src="./background.css"></style>
<template>
  <div class="background-wrapper">
    <img v-if="enabled" alt="Watch face background." class="background-image" :src="image" :style="position" />
  </div>
</template>
