<script src="./number.js" />
<style scoped src="./number.css"></style>
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
        <v-btn class="ml-5" @click="numberFilePick">
          <v-icon
            :color="images.length ? 'primary' : 'normal'"
          >
            {{ images.length ? 'mdi-image-off' : 'mdi-image-multiple' }}
          </v-icon>
        </v-btn>
        <input
          ref="numberInput"
          accept=".png"
          class="editor-activity-steps-number-hidden"
          multiple
          type="file"
          @change="numberFilePicked"
        />
      </v-layout>
    </v-card-title>
    <v-expand-transition>
      <v-card-text v-show="expanded">
        <v-alert v-if="error" type="error">{{ error }}</v-alert>
        <v-select
          v-model="alignment"
          :disabled="!images.length"
          :items="alignmentItems"
          :label="tAlignment"
          :prepend-icon="alignmentIcon"
        ></v-select>
        <v-slider
          v-model="spacing"
          step="1"
          thumb-label
          :disabled="!images.length"
          :label="`${tSpacing}:`"
          :min="-50"
          :max="50"
        />
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <h3 v-on="on">{{ tDimensions }}</h3>
          </template>
          <span>{{ tDimensionsDescription }}</span>
        </v-tooltip>
        <v-slider
          v-model="bottom"
          step="1"
          thumb-label
          :disabled="!images.length"
          :label="`${tBottom}:`"
          :min="0"
          :max="dimensions.height"
        />
        <v-slider
          v-model="left"
          step="1"
          thumb-label
          :disabled="!images.length"
          :label="`${tLeft}:`"
          :min="0"
          :max="dimensions.width"
        />
        <v-slider
          v-model="right"
          step="1"
          thumb-label
          :disabled="!images.length"
          :label="`${tRight}:`"
          :min="0"
          :max="dimensions.width"
        />
        <v-slider
          v-model="top"
          step="1"
          thumb-label
          :disabled="!images.length"
          :label="`${tTop}:`"
          :min="0"
          :max="dimensions.height"
        />
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>
