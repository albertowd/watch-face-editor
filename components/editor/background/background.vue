<script src="./background.js" />
<style scoped src="./background.css"></style>
<template>
  <v-layout class="editor-background" column>
    <br />
    <imageEditor :v-if="hasBackground" name="image" />
    <br />
    <imageEditor :v-if="hasPreview" name="preview" />
    <br />
  </v-layout>
</template>
