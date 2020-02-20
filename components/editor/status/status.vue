<script src="./status.js" />
<style src="./status.css"></style>
<template>
  <v-layout class="status-editor" column>
    <positionedImageEditor name="alarm" store="status" title="Alarm" />
    <positionedImageEditor name="bluetooth" store="status" title="Bluetooth" />
    <positionedImageEditor name="dnd" store="status" title="Do not Disturb" />
    <positionedImageEditor name="lock" store="status" title="Lock" />
  </v-layout>
</template>
