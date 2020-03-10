<script src="./time.js" />
<style scoped src="./time.css"></style>
<template>
  <v-layout class="editor-time" column>
    <br />
    <ampmEditor :v-if="hasAmPm" />
    <br />
    <numberEditor ref="hoursEditor" :v-if="hasHours" name="hours" @newImages="onNewImages" />
    <br />
    <delimiterEditor :v-if="hasDelimiter" />
    <br />
    <numberEditor ref="minutesEditor" :v-if="hasMinutes" name="minutes" @newImages="onNewImages" />
    <br />
    <numberEditor ref="secondsEditor" :v-if="hasSeconds" name="seconds" @newImages="onNewImages" />
    <br />
  </v-layout>
</template>
