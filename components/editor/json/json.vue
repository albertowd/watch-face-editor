<script src="./json.js" />
<style scoped src="./json.css"></style>
<template>
  <v-card class="json-editor" outlined>
    <v-card-title>
      <h2>{{ tTitle }}</h2>
    </v-card-title>
    <v-card-text>
      <v-textarea ref="textArea" v-model="json" placeholder="{...}" rows="10" @change="onChange"></v-textarea>
      <v-alert v-if="json && error" type="error">{{ error }}</v-alert>
    </v-card-text>
  </v-card>
</template>
