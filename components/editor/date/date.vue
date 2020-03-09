<script src="./date.js" />
<style scoped src="./date.css"></style>
<template>
  <v-layout class="editor-date" column>
    <br />
    <oneLine v-if="hasOneLine" />
    <br />
    <weekDayEditor v-if="hasWeekDay" />
    <br />
  </v-layout>
</template>
