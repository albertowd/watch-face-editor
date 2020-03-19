<script src="./one-line-border.js" />
<style scoped src="./one-line-border.css"></style>
<template>
  <div
    v-if="numberImages.length"
    :align="alignment"
    :class="`device-screen-date-month-and-day-one-line-border ${$route.path === '/date' ? 'device-screen-date-month-and-day-one-line-border-border' : ''}`"
    :justify="justify"
    :style="position"
  >
  </div>
</template>
