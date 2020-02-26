<script src="./time.js" />
<style scoped src="./time.css"></style>
<template>
  <v-layout class="editor-time" column>
    <br />
    <numberEditor ref="hoursEditor" name="hours" @newImages="onNewImages" />
    <br />
    <numberEditor ref="minutesEditor" name="minutes" @newImages="onNewImages" />
    <br />
  </v-layout>
</template>
