<script src="./static.js" />
<style scoped src="./static.css"></style>
<template>
  <v-card class="editor-animation-static" outlined>
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
        <v-btn @click="pickImages">
          <v-icon :color="images.length ? 'primary' : 'normal'">{{ images.length ? 'mdi-image-off' : 'mdi-image-multiple' }}</v-icon>
        </v-btn>
        <input
          ref="imagesInput"
          accept=".png"
          class="editor-animation-static-hidden"
          multiple
          type="file"
          @change="uploadImages"
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
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <h3 v-on="on">{{ tPause }}</h3>
          </template>
          <span>{{ tPauseDescription }}</span>
        </v-tooltip>
        <v-slider
          v-model="pause"
          step="1"
          thumb-label
          :disabled="!images.length"
          :label="`${tMilliseconds}:`"
          :min="0"
          :max="1000"
        />
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <h3 v-on="on">{{ tSpeed }}</h3>
          </template>
          <span>{{ tSpeedDescription }}</span>
        </v-tooltip>
        <v-slider
          v-model="speed"
          step="1"
          thumb-label
          :disabled="!images.length"
          :label="`${tMilliseconds}:`"
          :min="0"
          :max="1000"
        />
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <h3 v-on="on">{{ tTime }}</h3>
          </template>
          <span>{{ tTimeDescription }}</span>
        </v-tooltip>
        <v-slider
          v-model="timeMs"
          step="1"
          thumb-label
          :disabled="!images.length"
          :label="`${tMilliseconds}:`"
          :min="0"
          :max="20000"
        />
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>
