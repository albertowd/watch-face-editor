<script src="./number.js" />
<style scoped src="./number.css"></style>
<template>
  <v-row
    v-if="images.length"
    class="device-screen-date-month-and-day-separate-number"
    :align="alignment"
    :justify="justify"
    :style="position"
  >
    <img :v-if="twoDigits" :style="spacing" :src="majorImage" @click="circle" />
    <img :style="spacing" :src="images[index % 10]" @click="circle" />
  </v-row>
</template>
