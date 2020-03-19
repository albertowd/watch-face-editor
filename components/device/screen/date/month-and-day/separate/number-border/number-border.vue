<script src="./number-border.js" />
<style scoped src="./number-border.css"></style>
<template>
  <div
    v-if="images.length"
    :align="alignment"
    :class="`device-screen-date-month-and-day-separate-number-border ${$route.path === '/date' ? 'device-screen-date-month-and-day-separate-number-border-border' : ''}`"
    :justify="justify"
    :style="position"
  ></div>
</template>
