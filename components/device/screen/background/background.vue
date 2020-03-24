<script src="./background.js" />
<style scoped src="./background.css"></style>
<template>
  <img v-if="null !== image" class="device-screen-background" :src="image" :style="position" />
</template>
