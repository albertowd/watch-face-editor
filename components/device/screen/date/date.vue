<script src="./date.js" />
<style scoped src="./date.css"></style>
<template>
  <img
    v-if="weekDay.images.length"
    class="device-screen-date"
    :src="weekDay.images[weekDayIndex]"
    :style="weekDayPosition"
    @click="circleWeekDay"
  />
</template>
