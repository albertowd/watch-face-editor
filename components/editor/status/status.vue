<script src="./status.js" />
<template>
  <v-card class="status-editor" outlined>
    <v-card-title>
      <h2>Status</h2>
    </v-card-title>
    <v-card-text>
      <positionedImageEditor name="alarm" store="status" title="Alarm" />
      <positionedImageEditor name="bluetooth" store="status" title="Bluetooth" />
      <positionedImageEditor name="dnd" store="status" title="Do not Disturb" />
      <positionedImageEditor name="lock" store="status" title="Lock" />
    </v-card-text>
  </v-card>
</template>
