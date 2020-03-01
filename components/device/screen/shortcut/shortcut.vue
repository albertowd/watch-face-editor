<script src="./shortcut.js" />
<style scoped src="./shortcut.css"></style>
<template>
  <div v-if="enabled" class="device-screen-shortcut" :style="style" @click="snackbar = true">
    <v-snackbar v-model="snackbar">{{ name }} clicked!</v-snackbar>
  </div>
</template>
