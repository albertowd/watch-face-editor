<script src="./json.js" />
<style scoped src="./json.css"></style>
<template>
  <v-card class="editor-json" outlined>
    <v-card-title>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <h2 v-on="on">{{ tTitle }}</h2>
        </template>
        <span>{{ tTitleDescription }}</span>
      </v-tooltip>
    </v-card-title>
    <v-card-text>
      <v-textarea ref="textArea" v-model="json" placeholder="{...}" readonly rows="10"></v-textarea>
      <v-alert v-if="error" type="error">{{ error }}</v-alert>
    </v-card-text>
  </v-card>
</template>
