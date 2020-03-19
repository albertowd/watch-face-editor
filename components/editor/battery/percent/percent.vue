<script src="./percent.js" />
<style scoped src="./percent.css"></style>
<template>
  <v-card outlined>
    <v-card-title>
      <v-layout>
        <v-btn text @click="expanded = !expanded">
          <v-icon>{{ expanded ? 'mdi-chevron-down' : 'mdi-chevron-right' }}</v-icon>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <h2 v-on="on">{{ tTitle }}</h2>
            </template>
            <span>{{ tTitleDescription }}</span>
          </v-tooltip>
        </v-btn>
        <v-spacer />
        <v-btn @click="pickImage">
          <h2 :class="image ? 'primary--text' : 'normal--text'">%</h2>
        </v-btn>
        <input
          ref="imageInput"
          accept=".png"
          class="editor-battery-percentage-hidden"
          type="file"
          @change="uploadImage"
        />
      </v-layout>
    </v-card-title>
    <v-expand-transition>
      <v-card-text v-show="expanded">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <h3 v-on="on">{{ tPosition }}</h3>
          </template>
          <span>{{ tPositionDescription }}</span>
        </v-tooltip>
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
