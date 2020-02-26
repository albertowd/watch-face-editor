<script src="./screen.js" />
<style scoped src="./screen.css"></style>
<template>
  <div class="device-screen" :style="size">
    <background />
    <status name="alarm" />
    <status name="bluetooth" />
    <status name="dnd" />
    <status name="lock" />
    <screenTime :initial="new Date().getHours() / 10" :max="2" name="hours" sub="tens" />
    <screenTime :initial="new Date().getHours() % 10" name="hours" sub="ones" />
    <screenTime :initial="new Date().getMinutes() / 10" :max="5" name="minutes" sub="tens" />
    <screenTime :initial="new Date().getMinutes() % 10" name="minutes" sub="ones" />
    <screenDate />
  </div>
</template>
