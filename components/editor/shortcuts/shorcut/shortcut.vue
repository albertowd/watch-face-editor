<script src="./shortcut.js" />
<style scoped src="./shortcut.css"></style>
<template>
  <v-card class="editor-shortcuts-shortcut" outlined>
    <v-card-title>
      <v-layout>
        <h2>{{ tTitle }}</h2>
        <v-spacer />
        <v-switch v-model="enabled" />
      </v-layout>
    </v-card-title>
    <v-card-text>
      <h3>{{ tPosition }}</h3>
      <v-slider
        v-model="x"
        label="X:"
        step="1"
        thumb-label
        :disabled="!enabled"
        :min="0"
        :max="dimensions.width"
      />
      <v-slider
        v-model="y"
        label="Y:"
        step="1"
        thumb-label
        :disabled="!enabled"
        :min="0"
        :max="dimensions.height"
      />
      <h3>{{ tSize }}</h3>
      <v-slider
        v-model="height"
        step="1"
        thumb-label
        :disabled="!enabled"
        :label="`${tHeight}:`"
        :min="0"
        :max="dimensions.width"
      />
      <v-slider
        v-model="width"
        step="1"
        thumb-label
        :disabled="!enabled"
        :label="`${tWidth}:`"
        :min="0"
        :max="dimensions.height"
      />
    </v-card-text>
  </v-card>
</template>
