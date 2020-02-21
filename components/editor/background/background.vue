<script src="./background.js" />
<style scoped src="./background.css"></style>
<template>
  <v-card class="editor-background" outlined>
    <v-card-title>
      <v-layout>
        <h2>{{ tTitle }}</h2>
        <v-spacer />
        <v-btn :outlined="!enabled" @click="pickImage">
          <v-icon v-if="!enabled">mdi-image</v-icon>
          <v-icon v-if="enabled">mdi-image-off</v-icon>
        </v-btn>
        <input
          ref="imageInput"
          accept="image/*"
          class="editor-background-hidden"
          type="file"
          @change="uploadImage"
        />
      </v-layout>
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
        @change="changeX"
      />
      <v-slider
        label="Y:"
        step="1"
        thumb-label="always"
        :disabled="!enabled"
        :min="0"
        :max="dimensions.height"
        :value="position.y"
        @change="changeY"
      />
    </v-card-text>
  </v-card>
</template>
