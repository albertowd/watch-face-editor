<script src="./icons.js" />
<style scoped src="./icons.css"></style>
<template>
  <div v-if="images.length">
    <img v-if="images[0]" :src="images[0]" :style="position[0]" @click="circle" />
    <img v-if="images[1] && index > 0" :src="images[1]" :style="position[1]" @click="circle" />
    <img v-if="images[2] && index > 1" :src="images[2]" :style="position[2]" @click="circle" />
    <img v-if="images[3] && index > 2" :src="images[3]" :style="position[3]" @click="circle" />
    <img v-if="images[4] && index > 3" :src="images[4]" :style="position[4]" @click="circle" />
    <img v-if="images[5] && index > 4" :src="images[5]" :style="position[5]" @click="circle" />
    <img v-if="images[6] && index > 5" :src="images[6]" :style="position[6]" @click="circle" />
    <img v-if="images[7] && index > 6" :src="images[7]" :style="position[7]" @click="circle" />
    <img v-if="images[8] && index > 7" :src="images[8]" :style="position[8]" @click="circle" />
    <img v-if="images[9] && index > 8" :src="images[9]" :style="position[9]" @click="circle" />
    <img v-if="images[10] && index > 9" :src="images[9]" :style="position[9]" @click="circle" />
  </div>
</template>
