<script src="./battery.js" />
<style scoped src="./battery.css"></style>
<template>
  <v-layout class="editor-battery" column>
    <br />
    <iconsEditor />
    <br />
    <imagesEditor v-if="hasImages" />
    <br />
    <percentEditor v-if="hasPercent" />
    <br />
    <textEditor v-if="hasText" />
    <br />
  </v-layout>
</template>
