<script src="./status.js" />
<style scoped src="./status.css"></style>
<template>
  <v-layout class="editor-status" column>
    <br />
    <iconEditor v-if="hasAlarm" name="alarm" />
    <br />
    <iconEditor v-if="hasBluetooth" name="bluetooth" />
    <br />
    <iconEditor v-if="hasDND" name="dnd" />
    <br />
    <iconEditor v-if="hasLock" name="lock" />
    <br />
  </v-layout>
</template>
