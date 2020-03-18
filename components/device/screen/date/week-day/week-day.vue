<script src="./week-day.js" />
<style scoped src="./week-day.css"></style>
<template>
  <img
    v-if="images.length"
    class="device-screen-date-week-day"
    :src="images[index]"
    :style="position"
    @click="circle"
  />
</template>
