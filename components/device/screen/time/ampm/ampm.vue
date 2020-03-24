<script src="./ampm.js" />
<style scoped src="./ampm.css"></style>
<template>
  <img v-if="images.length" class="device-screen-time-ampm" :src="images[index]" :style="position" @click="changeImage" />
</template>
