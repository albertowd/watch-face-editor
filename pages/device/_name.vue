<script src="./_name.js" />
<style src="./_name.css"></style>
<template>
  <v-row align="center" class="fill-height" justify="center">
    <v-col align="right" md="4">
      <preview :device="device" />
    </v-col>
    <v-col md="8">
      <info :device="device" />
    </v-col>
  </v-row>
</template>
