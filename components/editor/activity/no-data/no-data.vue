<script src="./no-data.js" />
<style scoped src="./no-data.css"></style>
<template>
  <v-card outlined>
    <v-card-title>
      <v-layout>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <h4 class="pl-5" v-on="on">{{ tTitle }}</h4>
          </template>
          <span>{{ tTitleDescription }}</span>
        </v-tooltip>
        <v-spacer />
        <v-btn class="ml-5" @click="imageFilePick">
          <v-icon :color="image ? 'primary' : 'normal'">mdi-alert-outline</v-icon>
        </v-btn>
        <input
          ref="imageInput"
          accept=".png"
          class="editor-activity-no-data-hidden"
          type="file"
          @change="imageFilePicked"
        />
      </v-layout>
    </v-card-title>
  </v-card>
</template>
