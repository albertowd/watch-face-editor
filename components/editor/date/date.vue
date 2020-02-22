<script src="./date.js" />
<style scoped src="./date.css"></style>
<template>
  <v-layout class="editor-date" column>
    <br />
    <weekDayEditor v-if="hasWeekDay" name="weekDay" />
    <br />
  </v-layout>
</template>
