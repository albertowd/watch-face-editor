<script src="./time.js" />
<style scoped src="./time.css"></style>
<template>
  <img v-if="image" class="device-screen-time" :src="image" :style="position" @click="toggle" />
</template>
