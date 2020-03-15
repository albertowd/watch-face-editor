<script src="./static.js" />
<style scoped src="./static.css"></style>
<template>
  <img v-if="images.length" class="device-screen-animation-static" :src="images[index % images.length]" :style="position" @click="toggle" />
</template>
