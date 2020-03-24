<script src="./number.js" />
<style scoped src="./number.css"></style>
<template>
  <div v-if="images.length">
    <div
      v-if="images.length && $route.path === '/activity'"
      class="device-screen-activity-distance-number-border"
      :style="position"
    >
    </div>
    <v-row
      class="device-screen-activity-distance-number"
      :align="alignment"
      :justify="justify"
      :style="position"
    >
      <img v-if="distance === null" :style="spacing" :src="noDataImage" @click="circle()" />
      <img v-if="distance > 999" :style="spacing" :src="images[tensIndex]" @click="circle(1000)" />
      <img v-if="distance !== null" :style="spacing" :src="images[onesIndex]" @click="circle(100)" />
      <img v-if="distance !== null && decimalImage" :style="spacing" :src="decimalImage" />
      <img v-if="distance !== null" :style="spacing" :src="images[decimalTensIndex]" @click="circle(10)" />
      <img v-if="distance !== null" :style="spacing" :src="images[decimalOnesIndex]" @click="circle(1)" />
      <img v-if="kmImage" :style="spacing" :src="kmImage" />
    </v-row>
  </div>
</template>
