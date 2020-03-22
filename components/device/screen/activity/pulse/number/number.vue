<script src="./number.js" />
<style scoped src="./number.css"></style>
<template>
  <div v-if="images.length">
    <div
      v-if="images.length && $route.path === '/activity'"
      class="device-screen-activity-pulse-number-border"
      :style="position"
    >
    </div>
    <v-row
      class="device-screen-activity-pulse-number"
      :align="alignment"
      :justify="justify"
      :style="position"
    >
      <img v-if="pulse === null" :style="spacing" :src="noDataImage" @click="circle()" />
      <img v-if="pulse > 99" :style="spacing" :src="images[Math.floor((pulse % 1000) / 100)]" @click="circle(100)" />
      <img v-if="pulse > 9" :style="spacing" :src="images[Math.floor((pulse % 100) / 10)]" @click="circle(10)" />
      <img v-if="pulse !== null" :style="spacing" :src="images[pulse % 10]" @click="circle(1)" />
    </v-row>
  </div>
</template>
