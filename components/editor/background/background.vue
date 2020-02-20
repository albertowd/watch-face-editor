<script src="./background.js" />
<style src="./background.css"></style>
<template>
  <v-card class="background-editor" outlined>
    <v-card-title>
      <v-btn :outlined="!enabled" @click="onFilePick">{{ enabled ? "Background - Clear" : "Background" }}</v-btn>
      <input
        ref="imageInput"
        accept="image/*"
        type="file"
        @change="onFilePicked"
      />
    </v-card-title>
    <v-card-text>
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
        label="Y (inverted):"
        step="1"
        thumb-label="always"
        vertical
        :disabled="!enabled"
        :min="0"
        :max="dimensions.height"
        :value="position.y"
        @change="onYChange"
      />
    </v-card-text>
  </v-card>
</template>
