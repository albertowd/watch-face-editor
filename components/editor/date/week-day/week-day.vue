<script src="./week-day.js" />
<style scoped src="./week-day.css"></style>
<template>
  <v-card outlined>
    <v-card-title>
      <v-layout>
        <h2>{{ tTitle }}</h2>
        <v-spacer />
        <v-btn class="ml-5" @click="onFilePick">
          <v-icon :color="images.length ? 'primary' : 'normal'">
            {{ images.length ? 'mdi-image-off' : 'mdi-image-multiple' }}
          </v-icon>
        </v-btn>
        <input
          ref="pngInput"
          accept=".png"
          class="editor-date-week-day-icon-hidden"
          multiple
          type="file"
          @change="onFilePicked"
        />
      </v-layout>
    </v-card-title>
    <v-card-text>
      <v-alert v-if="error" type="error">{{ error }}</v-alert>
      <h3>{{ tPosition }}</h3>
      <v-slider
        v-model="x"
        label="X:"
        step="1"
        thumb-label
        :disabled="!images.length"
        :min="0"
        :max="dimensions.width"
      />
      <v-slider
        v-model="y"
        label="Y:"
        step="1"
        thumb-label
        :disabled="!images.length"
        :min="0"
        :max="dimensions.height"
      />
    </v-card-text>
  </v-card>
</template>
