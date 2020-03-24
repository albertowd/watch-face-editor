<script src="./images.js" />
<style scoped src="./images.css"></style>
<template>
  <img v-if="images.length" class="device-screen-battery-images" :src="images[index]" :style="position" @click="circle" />
</template>
