<script src="./date.js" />
<style scoped src="./date.css"></style>
<template>
  <img
    v-if="images.length"
    class="device-screen-date"
    :src="images[weekDayIndex]"
    :style="weekDayPosition"
    @click="circleWeekDay"
  />
</template>
