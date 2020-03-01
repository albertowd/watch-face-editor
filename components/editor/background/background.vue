<script src="./background.js" />
<style scoped src="./background.css"></style>
<template>
  <v-card class="editor-background" outlined>
    <v-card-title>
      <v-layout>
        <h2>{{ tTitle }}</h2>
        <v-spacer />
        <v-btn @click="pickImage">
          <v-icon :color="image ? 'primary' : 'normal'">{{ image ? 'mdi-image-off' : 'mdi-image' }}</v-icon>
        </v-btn>
        <input
          ref="imageInput"
          accept=".png"
          class="editor-background-hidden"
          type="file"
          @change="uploadImage"
        />
      </v-layout>
    </v-card-title>
    <v-card-text>
      <h3>{{ tPosition }}</h3>
      <v-slider
        v-model="x"
        label="X:"
        step="1"
        thumb-label
        :disabled="!image"
        :min="0"
        :max="dimensions.width"
      />
      <v-slider
        v-model="y"
        label="Y:"
        step="1"
        thumb-label
        :disabled="!image"
        :min="0"
        :max="dimensions.height"
      />
    </v-card-text>
  </v-card>
</template>
