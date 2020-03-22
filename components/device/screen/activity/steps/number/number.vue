<script src="./number.js" />
<style scoped src="./number.css"></style>
<template>
  <div v-if="images.length">
    <div
      v-if="images.length && $route.path === '/activity'"
      class="device-screen-activity-steps-number-border"
      :style="position"
    >
    </div>
    <v-row
      class="device-screen-activity-steps-number"
      :align="alignment"
      :justify="justify"
      :style="position"
    >
      <img v-if="steps > 9999" :style="spacing" :src="images[Math.floor(steps / 10000)]" @click="circle(1000)" />
      <img v-if="steps > 999" :style="spacing" :src="images[Math.floor(steps % 10000) / 1000]" @click="circle(1000)" />
      <img v-if="steps > 99" :style="spacing" :src="images[Math.floor((steps % 1000) / 100)]" @click="circle(100)" />
      <img v-if="steps > 9" :style="spacing" :src="images[Math.floor((steps % 100) / 10)]" @click="circle(10)" />
      <img :style="spacing" :src="images[steps % 10]" @click="circle(1)" />
    </v-row>
  </div>
</template>
