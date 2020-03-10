<script src="./date.js" />
<style scoped src="./date.css"></style>
<template>
  <v-layout class="editor-date" column>
    <br />
    <numberEditor v-if="hasDay" name="day" />
    <br />
    <numberEditor v-if="hasMonth" name="month" />
    <br />
    <monthNameEditor v-if="hasMonthName" />
    <br />
    <oneLineEditor v-if="hasOneLine" />
    <br />
    <weekDayEditor v-if="hasWeekDay" />
    <br />
  </v-layout>
</template>
