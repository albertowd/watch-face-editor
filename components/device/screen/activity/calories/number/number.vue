<script src="./number.js" />
<style scoped src="./number.css"></style>
<template>
  <div v-if="images.length">
    <div
      v-if="images.length && $route.path === '/activity'"
      class="device-screen-activity-calories-number-border"
      :style="position"
    >
    </div>
    <v-row
      class="device-screen-activity-calories-number"
      :align="alignment"
      :justify="justify"
      :style="position"
    >
      <img v-if="calories > 999" :style="spacing" :src="images[Math.floor(calories / 1000)]" @click="circle(1000)" />
      <img v-if="calories > 99" :style="spacing" :src="images[Math.floor((calories % 1000) / 100)]" @click="circle(100)" />
      <img v-if="calories > 9" :style="spacing" :src="images[Math.floor((calories % 100) / 10)]" @click="circle(10)" />
      <img :style="spacing" :src="images[calories % 10]" @click="circle(1)" />
    </v-row>
  </div>
</template>
