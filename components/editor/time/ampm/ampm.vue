<script src="./ampm.js" />
<style scoped src="./ampm.css"></style>
<template>
  <v-card outlined>
    <v-card-title>
      <v-layout>
        <h2>{{ tTitle }}</h2>
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
    <v-card-text>
      <v-alert v-if="error" type="error">{{ error }}</v-alert>
      <h3>{{ tPosition }}</h3>
      <v-slider
        label="X:"
        step="1"
        thumb-label
        :disabled="!(amImages.length || pmImages.length)"
        :min="0"
        :max="size.width"
        :value="position.x"
        @change="onXChange"
      />
      <v-slider
        label="Y:"
        step="1"
        thumb-label
        :disabled="!(amImages.length || pmImages.length)"
        :min="0"
        :max="size.height"
        :value="position.y"
        @change="onYChange"
      />
    </v-card-text>
  </v-card>
</template>
