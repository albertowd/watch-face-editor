<script src="./info.js" />
<style scoped src="./info.css"></style>
<template>
  <v-card class="info-card" outlined>
    <v-card-title>
      <h2>{{ name }}</h2>
    </v-card-title>
    <v-card-text>
      <p>
        {{ device.screen }}:
        <span>{{ width }} x {{ height }} pixels</span>
      </p>
      <p>
        {{ device.packLimit }}:
        <span>{{ limit }} kb</span>
      </p>
      <v-layout>
        <v-btn color="success">Export Assets</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary">Import Assets</v-btn>
      </v-layout>
    </v-card-text>
  </v-card>
</template>
