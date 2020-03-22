<script src="./activity.js" />
<style scoped src="./activity.css"></style>
<template>
  <v-layout class="editor-activity" column>
    <br />
    <caloriesNumberEditor :v-if="hasCaloriesNumber" />
    <br />
    <distanceNumberEditor :v-if="hasDistanceNumber" />
    <br />
    <pulseNumberEditor :v-if="hasPulseNumber" />
    <br />
    <stepsNumberEditor :v-if="hasStepsNumber" />
    <br />
  </v-layout>
</template>
