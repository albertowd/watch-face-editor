<script src="./one-line.js" />
<style scoped src="./one-line.css"></style>
<template>
  <v-card outlined>
    <v-card-title>
      <v-layout>
        <h2>{{ tTitle }}</h2>
        <v-spacer />
        <v-btn class="ml-5" @click="numberFilePick">
          <v-icon :color="numberImages.length ? 'primary' : 'normal'">{{ numberImages.length ? 'mdi-image-off' : 'mdi-image-multiple' }}</v-icon>
        </v-btn>
        <input
          ref="numberInput"
          accept=".png"
          class="editor-date-one-line-icon-hidden"
          multiple
          type="file"
          @change="numberFilePicked"
        />
        <v-btn class="ml-5" @click="delimiterFilePick">
          <v-icon :color="delimiterImage ? 'primary' : 'normal'">mdi-slash-forward</v-icon>
        </v-btn>
        <input
          ref="delimiterInput"
          accept=".png"
          class="editor-date-one-line-icon-hidden"
          type="file"
          @change="delimiterFilePicked"
        />
      </v-layout>
    </v-card-title>
    <v-card-text>
      <v-alert v-if="error" type="error">{{ error }}</v-alert>
      <v-select
        v-model="alignment"
        :items="['Bottom Center', 'Bottom Left', 'Bottom Right', 'Center Center', 'Center Left', 'Center Right', 'Top Center', 'Top Left', 'Top Right']"
        :disabled="!numberImages.length"
        :label="tAlignment"
      ></v-select>
      <v-slider
        v-model="spacing"
        step="1"
        thumb-label
        :disabled="!numberImages.length"
        :label="`${tSpacing}:`"
        :min="-50"
        :max="50"
      />
      <h3>{{ tPosition }}</h3>
      <v-slider
        v-model="left"
        label="X:"
        step="1"
        thumb-label
        :disabled="!numberImages.length"
        :min="0"
        :max="dimensions.width"
      />
      <v-slider
        v-model="top"
        label="Y:"
        step="1"
        thumb-label
        :disabled="!numberImages.length"
        :min="0"
        :max="dimensions.height"
      />
      <h3>{{ tSize }}</h3>
      <v-slider
        v-model="bottom"
        step="1"
        thumb-label
        :disabled="!numberImages.length"
        :label="`${tHeight}:`"
        :min="0"
        :max="dimensions.height"
      />
      <v-slider
        v-model="right"
        step="1"
        thumb-label
        :disabled="!numberImages.length"
        :label="`${tWidth}:`"
        :min="0"
        :max="dimensions.width"
      />
    </v-card-text>
  </v-card>
</template>
