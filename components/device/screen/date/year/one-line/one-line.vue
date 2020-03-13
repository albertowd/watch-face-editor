<script src="./one-line.js" />
<style scoped src="./one-line.css"></style>
<template>
  <v-row
    v-if="images.length"
    :align="alignment"
    :class="`device-screen-date-year-one-line ${$route.path === '/date' ? 'device-screen-date-year-one-line-border' : ''}`"
    :justify="justify"
    :style="position"
  >
    <img :style="spacing" :src="milleniumImage" @click="circle" />
    <img :style="spacing" :src="centuryImage" @click="circle" />
    <img :style="spacing" :src="decadeImage" @click="circle" />
    <img :style="spacing" :src="yearImage" @click="circle" />
  </v-row>
</template>
