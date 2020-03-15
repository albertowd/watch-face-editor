<script src="./icon.js" />
<style scoped src="./icon.css"></style>
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
        <v-btn @click="offFilePick">
          <v-icon :color="imageOff ? 'primary' : 'normal'">{{ iconOff }}</v-icon>
        </v-btn>
        <input
          ref="imageOffInput"
          accept=".png"
          class="editor-status-icon-hidden"
          type="file"
          @change="offFilePicked"
        />
        <v-btn class="ml-5" @click="onFilePick">
          <v-icon :color="imageOn ? 'primary' : 'normal'">{{ iconOn }}</v-icon>
        </v-btn>
        <input
          ref="imageOnInput"
          accept=".png"
          class="editor-status-icon-hidden"
          type="file"
          @change="onFilePicked"
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
          :disabled="!(imageOff || imageOn)"
          :min="0"
          :max="dimensions.width"
        />
        <v-slider
          v-model="y"
          label="Y:"
          step="1"
          thumb-label
          :disabled="!(imageOff || imageOn)"
          :min="0"
          :max="dimensions.height"
        />
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>
