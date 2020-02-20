<script src="./positioned-image-editor.js" />
<style src="./positioned-image-editor.css"></style>
<template>
  <div class="positioned-image-editor">
    <v-btn :outlined="!enabled" @click="onFilePick">{{ title + (enabled ? " - Clear" : "") }}</v-btn>
    <input ref="imageInput" accept="image/*" type="file" @change="onFilePicked" />
    <h3>Position</h3>
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
  </div>
</template>
