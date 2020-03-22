<script src="./activity.js" />
<style scoped src="./activity.css"></style>
<template>
  <v-layout class="editor-activity" column>
    <br :v-if="hasNoDataImage" />
    <noDataEditor :v-if="hasNoDataImage" />
    <br :v-if="hasCaloriesNumber" />
    <caloriesNumberEditor :v-if="hasCaloriesNumber" />
    <br :v-if="hasDistanceNumber" />
    <distanceNumberEditor :v-if="hasDistanceNumber" />
    <br :v-if="hasPulseNumber" />
    <pulseNumberEditor :v-if="hasPulseNumber" />
    <br :v-if="hasStepsNumber" />
    <stepsNumberEditor :v-if="hasStepsNumber" />
    <br />
  </v-layout>
</template>
