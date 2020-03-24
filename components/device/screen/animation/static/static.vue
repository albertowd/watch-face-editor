<script src="./static.js" />
<style scoped src="./static.css"></style>
<template>
  <img v-if="images.length" class="device-screen-animation-static" :src="images[index]" :style="position" @click="toggle" />
</template>
