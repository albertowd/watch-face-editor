<script src="./two-digits.js" />
<style scoped src="./two-digits.css"></style>
<template>
  <v-card outlined>
    <v-card-title>
      <v-container class="py-0">
        <v-layout>
          <h4>{{ tTwoDigitsDay }}</h4>
          <v-spacer />
          <v-switch v-model="twoDigitsDay" class="my-0" hide-details />
        </v-layout>
        <v-layout>
          <h4>{{ tTwoDigitsMonth }}</h4>
          <v-spacer />
          <v-switch v-model="twoDigitsMonth" class="my-0" hide-details />
        </v-layout>
      </v-container>
    </v-card-title>
  </v-card>
</template>
