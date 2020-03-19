<script src="./percent.js" />
<style scoped src="./percent.css"></style>
<template>
  <img v-if="null !== image" class="device-screen-battery-percentage" :src="image" :style="position" />
</template>
