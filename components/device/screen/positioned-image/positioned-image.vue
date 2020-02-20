<script src="./positioned-image.js" />
<style src="./positioned-image.css"></style>
<template>
  <img v-if="enabled" class="positioned-image" :src="image" :style="position" />
</template>
