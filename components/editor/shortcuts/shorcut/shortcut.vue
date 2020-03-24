<script src="./shortcut.js" />
<style scoped src="./shortcut.css"></style>
<template>
  <v-card class="editor-shortcuts-shortcut" outlined>
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
        <v-switch v-model="enabled" class="my-0" hide-details />
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
          :disabled="!enabled"
          :min="0"
          :max="dimensions.width"
        />
        <v-slider
          v-model="y"
          label="Y:"
          step="1"
          thumb-label
          :disabled="!enabled"
          :min="0"
          :max="dimensions.height"
        />
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <h3 v-on="on">{{ tSize }}</h3>
          </template>
          <span>{{ tSizeDescription }}</span>
        </v-tooltip>
        <v-slider
          v-model="height"
          step="1"
          thumb-label
          :disabled="!enabled"
          :label="`${tHeight}:`"
          :min="0"
          :max="dimensions.width"
        />
        <v-slider
          v-model="width"
          step="1"
          thumb-label
          :disabled="!enabled"
          :label="`${tWidth}:`"
          :min="0"
          :max="dimensions.height"
        />
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>
