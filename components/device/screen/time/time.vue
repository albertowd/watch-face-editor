<script src="./time.js" />
<style scoped src="./time.css"></style>
<template>
  <img v-if="image" :src="image" :style="position" @click="toggle" />
</template>
