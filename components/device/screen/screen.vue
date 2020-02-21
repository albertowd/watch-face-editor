<script src="./screen.js" />
<style scoped src="./screen.css"></style>
<template>
  <div class="device-screen" :style="size">
    <background />
    <status name="alarm" />
    <status name="bluetooth" />
    <status name="dnd" />
    <status name="lock" />
  </div>
</template>
