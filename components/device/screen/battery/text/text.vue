<script src="./text.js" />
<style scoped src="./text.css"></style>
<template>
  <v-row
    v-if="images.length"
    class="device-screen-battery-text"
    :align="alignment"
    :justify="justify"
    :style="position"
  >
    <img v-if="percentage > 99" :style="spacing" :src="hundredsImage" @click="circle(100)" />
    <img v-if="percentage > 9" :style="spacing" :src="tensImage" @click="circle(10)" />
    <img :style="spacing" :src="onesImage" @click="circle(1)" />
  </v-row>
</template>
