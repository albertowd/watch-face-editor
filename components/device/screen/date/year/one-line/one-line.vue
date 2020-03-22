<script src="./one-line.js" />
<style scoped src="./one-line.css"></style>
<template>
  <div>
    <div
      v-if="images.length && $route.path === '/date'"
      class="device-screen-date-year-one-line-border"
      :style="position"
    >
    </div>
    <v-row
      v-if="images.length"
      class="device-screen-date-year-one-line"
      :align="alignment"
      :justify="justify"
      :style="position"
    >
      <img :style="spacing" :src="milleniumImage" @click="circle(1000)" />
      <img :style="spacing" :src="centuryImage" @click="circle(100)" />
      <img :style="spacing" :src="decadeImage" @click="circle(10)" />
      <img :style="spacing" :src="yearImage" @click="circle(1)" />
    </v-row>
  </div>
</template>
