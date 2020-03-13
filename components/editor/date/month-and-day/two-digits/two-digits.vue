<script src="./two-digits.js" />
<style scoped src="./two-digits.css"></style>
<template>
  <v-card outlined>
    <v-card-text>
      <v-layout>
        <h3>{{ tTwoDigitsDay }}</h3>
        <v-spacer />
        <v-switch v-model="twoDigitsDay" />
      </v-layout>
      <v-layout>
        <h3>{{ tTwoDigitsMonth }}</h3>
        <v-spacer />
        <v-switch v-model="twoDigitsMonth" />
      </v-layout>
    </v-card-text>
  </v-card>
</template>
