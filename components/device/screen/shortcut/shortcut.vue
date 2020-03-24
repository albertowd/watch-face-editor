<script src="./shortcut.js" />
<style scoped src="./shortcut.css"></style>
<template>
  <div v-if="enabled" class="device-screen-shortcut" :style="style" @click="snackbar = true">
    <v-snackbar v-model="snackbar" :color="color" :timeout="1000" :top="true"><h1>{{ tName }}!</h1></v-snackbar>
  </div>
</template>
