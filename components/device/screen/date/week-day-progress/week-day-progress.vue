<script src="./week-day-progress.js" />
<style scoped src="./week-day-progress.css"></style>
<template>
  <img
    v-if="images.length"
    class="device-screen-date-week-day-progress"
    :src="images[index]"
    :style="position"
    @click="circle"
  />
</template>
