<script src="./icon.js" />
<style scoped src="./icon.css"></style>
<template>
  <v-card outlined>
    <v-card-title>
      <v-layout>
        <h2>{{ tTitle }}</h2>
        <v-spacer />
        <v-btn @click="offFilePick">
          <v-icon :color="imageOff ? 'primary' : 'normal'">mdi-power-plug-off</v-icon>
        </v-btn>
        <input
          ref="imageOffInput"
          class="editor-status-icon-hidden"
          accept=".png"
          type="file"
          @change="offFilePicked"
        />
        <v-btn class="ml-5" @click="onFilePick">
          <v-icon :color="imageOn ? 'primary' : 'normal'">mdi-power-plug</v-icon>
        </v-btn>
        <input
          ref="imageOnInput"
          class="editor-status-icon-hidden"
          accept=".png"
          type="file"
          @change="onFilePicked"
        />
      </v-layout>
    </v-card-title>
    <v-card-text>
      <h3>{{ tPosition }}</h3>
      <v-slider
        label="X:"
        step="1"
        thumb-label
        :disabled="!(imageOff || imageOn)"
        :min="0"
        :max="size.width"
        :value="position.x"
        @change="onXChange"
      />
      <v-slider
        label="Y:"
        step="1"
        thumb-label
        :disabled="!(imageOff || imageOn)"
        :min="0"
        :max="size.height"
        :value="position.y"
        @change="onYChange"
      />
    </v-card-text>
  </v-card>
</template>
