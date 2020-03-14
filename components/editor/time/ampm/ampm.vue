<script src="./ampm.js" />
<style scoped src="./ampm.css"></style>
<template>
  <v-card outlined>
    <v-card-title>
      <v-layout>
        <v-btn text @click="expanded = !expanded">
          <v-icon>{{ expanded ? 'mdi-chevron-down' : 'mdi-chevron-right' }}</v-icon>
          <h2>{{ tTitle }}</h2>
        </v-btn>
        <v-spacer />
        <v-btn @click="amFilePick">
          <v-icon :color="amImages.length ? 'primary' : 'normal'">mdi-weather-sunset-up</v-icon>
        </v-btn>
        <input
          ref="amInput"
          accept=".png"
          class="editor-time-ampm-hidden"
          multiple
          type="file"
          @change="amFilePicked"
        />
        <v-btn class="ml-5" @click="pmFilePick">
          <v-icon :color="pmImages.length ? 'primary' : 'normal'">mdi-weather-sunset-down</v-icon>
        </v-btn>
        <input
          ref="pmInput"
          accept=".png"
          class="editor-time-ampm-hidden"
          multiple
          type="file"
          @change="pmFilePicked"
        />
      </v-layout>
    </v-card-title>
    <v-expand-transition>
      <v-card-text v-show="expanded">
        <v-alert v-if="error" type="error">{{ error }}</v-alert>
        <h3>{{ tPosition }}</h3>
        <v-slider
          v-model="x"
          label="X:"
          step="1"
          thumb-label
          :disabled="!(amImages.length || pmImages.length)"
          :min="0"
          :max="dimensions.width"
        />
        <v-slider
          v-model="y"
          label="Y:"
          step="1"
          thumb-label
          :disabled="!(amImages.length || pmImages.length)"
          :min="0"
          :max="dimensions.height"
        />
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>
