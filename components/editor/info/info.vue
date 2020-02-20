<script src="./info.js" />
<style src="./info.css"></style>
<template>
  <v-card class="info-card" outlined>
    <v-card-title>
      <h2>{{ name }}</h2>
    </v-card-title>
    <v-card-text>
      <p>{{ device.screen }}: <span>{{ width }} x {{ height }} pixels</span></p>
      <p>{{ device.packLimit }}: <span>{{ limit }} kb</span></p>
    </v-card-text>
  </v-card>
</template>
