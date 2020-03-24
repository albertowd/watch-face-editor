<script src="./animation.js" />
<style scoped src="./animation.css"></style>
<template>
  <v-layout class="editor-animation" column>
    <staticEditor :v-if="hasStaticAnimation" />
  </v-layout>
</template>
