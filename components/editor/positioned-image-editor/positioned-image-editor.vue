<script src="./positioned-image-editor.js" />
<style scoped src="./positioned-image-editor.css"></style>
<template>
  <v-card class="positioned-image-editor my-5" outlined>
    <v-card-title>
      <v-btn :outlined="!enabled" @click="onFilePick">{{ tTitle + (enabled ? ` - ${tClear}` : "") }}</v-btn>
      <input ref="imageInput" accept="image/*" type="file" @change="onFilePicked" />
    </v-card-title>
    <v-card-text>
      <h3>{{ tPosition }}</h3>
      <v-slider
        label="X:"
        step="1"
        thumb-label="always"
        :disabled="!enabled"
        :min="0"
        :max="dimensions.width"
        :value="position.x"
        @change="onXChange"
      />
      <v-slider
        label="Y:"
        step="1"
        thumb-label="always"
        :disabled="!enabled"
        :min="0"
        :max="dimensions.height"
        :value="position.y"
        @change="onYChange"
      />
    </v-card-text>
  </v-card>
</template>
