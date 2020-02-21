<script src="./status.js" />
<style scoped src="./status.css"></style>
<template>
  <div class="device-screen-status-wrapper">
    <div class="device-screen-status">
      <img v-if="null !== imageOff && !on" class="device-screen-status-image" :src="imageOff" :style="position" @click="toggle" />
      <img v-if="null !== imageOn && on" class="device-screen-status-image" :src="imageOn" :style="position" @click="toggle" />
    </div>
  </div>
</template>
