<script src="./status.js" />
<style scoped src="./status.css"></style>
<template>
  <div>
    <img v-if="null !== imageOff && !on" :src="imageOff" :style="position" @click="toggle" />
    <img v-if="null !== imageOn && on" :src="imageOn" :style="position" @click="toggle" />
  </div>
</template>
