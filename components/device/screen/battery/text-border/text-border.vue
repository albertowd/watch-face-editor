<script src="./text-border.js" />
<style scoped src="./text-border.css"></style>
<template>
  <div
    v-if="images.length"
    :align="alignment"
    :class="`device-screen-battery-text-border ${$route.path === '/battery' ? 'device-screen-battery-text-border-border' : ''}`"
    :justify="justify"
    :style="position"
  >
  </div>
</template>
