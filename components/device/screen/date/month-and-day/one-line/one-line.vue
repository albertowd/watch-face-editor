<script src="./one-line.js" />
<style scoped src="./one-line.css"></style>
<template>
  <v-row
    v-if="numberImages.length"
    class="device-screen-date-month-and-day-one-line"
    :align="alignment"
    :justify="justify"
    :style="position"
  >
    <img :v-if="twoDigitsMonth" :style="spacing" :src="monthMajorImage" @click="circleMonth" />
    <img :style="spacing" :src="numberImages[monthIndex % 10]" @click="circleMonth" />
    <img :v-if="delimiterImage" :style="spacing" :src="delimiterImage" />
    <img :v-if="twoDigitsDay" :style="spacing" :src="dayMajorImage" @click="circleDay" />
    <img :style="spacing" :src="numberImages[dayIndex % 10]" @click="circleDay" />
  </v-row>
</template>
