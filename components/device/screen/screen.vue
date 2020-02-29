<script src="./screen.js" />
<style scoped src="./screen.css"></style>
<template>
  <div class="device-screen" :style="size">
    <background class="z-index:1;" />
    <status name="alarm" />
    <status name="bluetooth" />
    <status name="dnd" />
    <status name="lock" />
    <screenTime :initial="Math.floor(new Date().getHours() / 10)" :max="2" name="hours" sub="tens" />
    <screenTime :initial="new Date().getHours() % 10" name="hours" sub="ones" />
    <screenTimeDelimiter />
    <screenTime :initial="Math.floor(new Date().getMinutes() / 10)" :max="5" name="minutes" sub="tens" />
    <screenTime :initial="new Date().getMinutes() % 10" name="minutes" sub="ones" />
    <screenTimeAMPM />
    <screenTime :initial="Math.floor(new Date().getMinutes() / 10)" :max="5" name="seconds" sub="tens" />
    <screenTime :initial="new Date().getMinutes() % 10" name="seconds" sub="ones" />
    <screenDate />
  </div>
</template>
