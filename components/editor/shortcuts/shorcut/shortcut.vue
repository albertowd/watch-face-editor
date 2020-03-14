<script src="./shortcut.js" />
<style scoped src="./shortcut.css"></style>
<template>
  <v-card class="editor-shortcuts-shortcut" outlined>
    <v-card-title>
      <v-layout>
        <v-btn text @click="expanded = !expanded">
          <v-icon>{{ expanded ? 'mdi-chevron-down' : 'mdi-chevron-right' }}</v-icon>
          <h2>{{ tTitle }}</h2>
        </v-btn>
        <v-spacer />
        <v-switch v-model="enabled" class="my-0" hide-details />
      </v-layout>
    </v-card-title>
    <v-expand-transition>
      <v-card-text v-show="expanded">
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
    </v-expand-transition>
  </v-card>
</template>
