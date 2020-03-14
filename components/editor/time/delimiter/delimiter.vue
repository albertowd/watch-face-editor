<script src="./delimiter.js" />
<style scoped src="./delimiter.css"></style>
<template>
  <v-card outlined>
    <v-card-title>
      <v-layout>
        <v-btn text @click="expanded = !expanded">
          <v-icon>{{ expanded ? 'mdi-chevron-down' : 'mdi-chevron-right' }}</v-icon>
          <h2>{{ tTitle }}</h2>
        </v-btn>
        <v-spacer />
        <v-btn @click="onFilePick"><h2 :class="image ? 'primary--text' : 'normal--text'">:</h2></v-btn>
        <input
          ref="delimiterInput"
          accept=".png"
          class="editor-time-delimiter-hidden"
          type="file"
          @change="onFilePicked"
        />
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
    </v-expand-transition>
  </v-card>
</template>
