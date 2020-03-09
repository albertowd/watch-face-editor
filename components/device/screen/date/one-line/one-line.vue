<script src="./one-line.js" />
<style scoped src="./one-line.css"></style>
<template>
  <v-row
    v-if="numberImages.length"
    :align="alignment"
    :class="`device-screen-date-one-line ${$route.path === '/date' ? 'device-screen-date-one-line-border' : ''}`"
    :justify="justify"
    :style="position"
  >
    <img :v-if="twoDigitMonth" :style="spacing" :src="monthMajorImage" @click="circleMonth" />
    <img :style="spacing" :src="numberImages[monthIndex % 10]" @click="circleMonth" />
    <img :v-if="delimiterImage" :style="spacing" :src="delimiterImage" />
    <img :v-if="twoDigitDay" :style="spacing" :src="dayMajorImage" @click="circleDay" />
    <img :style="spacing" :src="numberImages[dayIndex % 10]" @click="circleDay" />
  </v-row>
</template>
