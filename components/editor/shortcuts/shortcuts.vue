<script src="./shortcuts.js" />
<style scoped src="./shortcuts.css"></style>
<template>
  <v-layout class="editor-shortcuts" column>
    <br />
    <shortcutEditor v-if="hasPulse" name="pulse" />
    <br />
    <shortcutEditor v-if="hasState" name="state" />
    <br />
    <shortcutEditor v-if="hasWeather" name="weather" />
    <br />
  </v-layout>
</template>
