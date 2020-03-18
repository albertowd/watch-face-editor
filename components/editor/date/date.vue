<script src="./date.js" />
<style scoped src="./date.css"></style>
<template>
  <v-layout class="editor-date" column>
    <br />
    <monthAndDayTwoDigitsEditor :v-if="hasMonthAndDayOneLine || hasMonthAndDaySeparateDay || hasMonthAndDaySeparateMonth" />
    <br />
    <monthAndDayOneLineEditor v-if="hasMonthAndDayOneLine" />
    <br />
    <monthAndDaySeparateNumberEditor v-if="hasMonthAndDaySeparateDay" name="day" />
    <br />
    <monthAndDaySeparateNumberEditor v-if="hasMonthAndDaySeparateMonth" name="month" />
    <br />
    <monthAndDaySeparateMonthNameEditor v-if="hasMonthAndDaySeparateMonthName" />
    <br />
    <weekDayEditor v-if="hasWeekDay" />
    <br />
    <weekDayProgressEditor v-if="hasWeekDayProgress" />
    <br />
    <yearOneLineEditor v-if="hasYearOneLine" />
    <br />
  </v-layout>
</template>
