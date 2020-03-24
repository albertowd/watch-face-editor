<script src="./month-name.js" />
<style scoped src="./month-name.css"></style>
<template>
  <img
    v-if="images.length"
    class="device-screen-date-month-and-day-separate-month-name"
    :src="images[index]"
    :style="position"
    @click="circle"
  />
</template>
