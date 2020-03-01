<script src="./delimiter.js" />
<style scoped src="./delimiter.css"></style>
<template>
  <v-card outlined>
    <v-card-title>
      <v-layout>
        <h2>{{ tTitle }}</h2>
        <v-spacer />
        <v-btn @click="onFilePick">
          <v-icon :color="image ? 'primary' : 'normal'">mdi-clock</v-icon>
        </v-btn>
        <input
          ref="delimiterInput"
          accept=".png"
          class="editor-time-delimiter-hidden"
          type="file"
          @change="onFilePicked"
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
