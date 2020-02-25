<script src="./info.js" />
<style scoped src="./info.css"></style>
<template>
  <v-card class="editor-info" outlined>
    <v-card-title>
      <h2>{{ name }}</h2>
    </v-card-title>
    <v-card-text>
      <p>
        {{ device.screen }}:
        <span>{{ width }} x {{ height }} pixels</span>
      </p>
      <p>
        {{ device.packLimit }}:
        <span>{{ limit }} kb</span>
      </p>
      <v-layout>
        <v-btn color="primary" @click="pickFiles">{{ tImport }}</v-btn>
        <input
          ref="jsonInput"
          accept=".json"
          class="editor-info-hidden"
          type="file"
          @change="uploadJSON"
        />
        <input
          ref="pngInput"
          accept=".png"
          class="editor-info-hidden"
          multiple
          type="file"
          @change="uploadPNGs"
        />
        <v-spacer></v-spacer>
        <v-btn color="success" :disabled="!changed" @click="exportZip">{{ tExport }}</v-btn>
      </v-layout>
    </v-card-text>
  </v-card>
</template>
