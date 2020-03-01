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
        label="X:"
        step="1"
        thumb-label
        :disabled="!enabled"
        :min="0"
        :max="dimensions.width"
        :value="position.x"
        @change="changeX"
      />
      <v-slider
        label="Y:"
        step="1"
        thumb-label
        :disabled="!enabled"
        :min="0"
        :max="dimensions.height"
        :value="position.y"
        @change="changeHeight"
      />
      <h3>{{ tSize }}</h3>
      <v-slider
        :label="`${tHeight}:`"
        step="1"
        thumb-label
        :disabled="!enabled"
        :min="0"
        :max="dimensions.width"
        :value="size.height"
        @change="changeWidth"
      />
      <v-slider
        :label="`${tWidth}:`"
        step="1"
        thumb-label
        :disabled="!enabled"
        :min="0"
        :max="dimensions.height"
        :value="size.width"
        @change="changeY"
      />
    </v-card-text>
  </v-card>
</template>
