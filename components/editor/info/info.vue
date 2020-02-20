<script src="./info.js" />
<style src="./info.css"></style>
<template>
  <v-card class="info-card" outlined>
    <v-card-title>
      <h2>{{ name }}</h2>
    </v-card-title>
    <v-card-text>
      <p>Screen: <span>{{ width }} x {{ height }} pixels</span></p>
      <p>Package Limit: <span>{{ limit }} kb</span></p>
    </v-card-text>
  </v-card>
</template>
