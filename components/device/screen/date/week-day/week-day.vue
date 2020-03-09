<script src="./week-day.js" />
<style scoped src="./week-day.css"></style>
<template>
  <img
    v-if="images.length"
    class="device-screen-date-week-day"
    :src="images[weekDayIndex]"
    :style="weekDayPosition"
    @click="circleWeekDay"
  />
</template>
