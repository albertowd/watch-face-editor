<script src="./status.js" />
<style scoped src="./status.css"></style>
<template>
  <v-layout class="editor-status" column>
    <br />
    <iconEditor v-if="hasAlarm" icon-off="mdi-alarm-off" icon-on="mdi-alarm" name="alarm" />
    <br />
    <iconEditor v-if="hasBluetooth" icon-off="mdi-bluetooth-off" icon-on="mdi-bluetooth" name="bluetooth" />
    <br />
    <iconEditor v-if="hasDND" icon-off="mdi-vibrate-off" icon-on="mdi-vibrate" name="dnd" />
    <br />
    <iconEditor v-if="hasLock" icon-off="mdi-lock-open-variant-outline" icon-on="mdi-lock-outline" name="lock" />
    <br />
  </v-layout>
</template>
