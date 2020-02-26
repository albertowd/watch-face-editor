<script src="./number.js" />
<style scoped src="./number.css"></style>
<template>
  <v-card outlined>
    <v-card-title>
      <v-layout>
        <h2>{{ tTitle }}</h2>
        <v-spacer />
        <v-btn @click="tensFilePick">
          {{ tTens }}
          <v-icon :color="tensImages.length ? 'primary' : 'normal'">mdi-image-multiple</v-icon>
        </v-btn>
        <input
          ref="tensInput"
          accept=".png"
          class="editor-time-number-hidden"
          multiple
          type="file"
          @change="tensFilePicked"
        />
        <v-btn class="ml-5" @click="onesFilePick">
          {{ tOnes }}
          <v-icon :color="onesImages.length ? 'primary' : 'normal'">mdi-image-multiple</v-icon>
        </v-btn>
        <input
          ref="onesInput"
          accept=".png"
          class="editor-time-number-hidden"
          multiple
          type="file"
          @change="tensFilePicked"
        />
      </v-layout>
    </v-card-title>
    <v-card-text>
      <v-alert v-if="tensError" type="error">{{ tensError }}</v-alert>
      <h3>{{ tPosition }} - {{ tTens }}</h3>
      <v-slider
        label="X:"
        step="1"
        thumb-label
        :disabled="!tensImages"
        :min="0"
        :max="size.width"
        :value="tensPosition.x"
        @change="onTensXChange"
      />
      <v-slider
        label="Y:"
        step="1"
        thumb-label
        :disabled="!tensImages"
        :min="0"
        :max="size.height"
        :value="tensPosition.y"
        @change="onTensYChange"
      />
      <v-alert v-if="onesError" type="error">{{ onesError }}</v-alert>
      <h3>{{ tPosition }} - {{ tOnes }}</h3>
      <v-slider
        label="X:"
        step="1"
        thumb-label
        :disabled="!onesImages"
        :min="0"
        :max="size.width"
        :value="onesPosition.x"
        @change="onOnesXChange"
      />
      <v-slider
        label="Y:"
        step="1"
        thumb-label
        :disabled="!onesImages"
        :min="0"
        :max="size.height"
        :value="onesPosition.y"
        @change="onOnesYChange"
      />
    </v-card-text>
  </v-card>
</template>
