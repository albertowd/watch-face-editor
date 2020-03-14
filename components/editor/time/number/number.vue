<script src="./number.js" />
<style scoped src="./number.css"></style>
<template>
  <v-card outlined>
    <v-card-title>
      <v-layout>
        <v-btn text @click="expanded = !expanded">
          <v-icon>{{ expanded ? 'mdi-chevron-down' : 'mdi-chevron-right' }}</v-icon>
          <h2>{{ tTitle }}</h2>
        </v-btn>
        <v-spacer />
        <v-btn @click="tensFilePick">
          {{ tTens }}
          <v-icon
            class="ml-5"
            :color="tensImages.length ? 'primary' : 'normal'"
          >
            mdi-dock-left mdi-image-multiple
          </v-icon>
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
          <v-icon
            class="ml-5"
            :color="onesImages.length ? 'primary' : 'normal'"
          >
            mdi-dock-right mdi-image-multiple
          </v-icon>
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
    <v-expand-transition>
      <v-card-text v-show="expanded">
        <v-alert v-if="tensError" type="error">{{ tensError }}</v-alert>
        <h3>{{ tPosition }} - {{ tTens }}</h3>
        <v-slider
          v-model="tensX"
          label="X:"
          step="1"
          thumb-label
          :disabled="!tensImages.length"
          :min="0"
          :max="dimensions.width"
        />
        <v-slider
          v-model="tensY"
          label="Y:"
          step="1"
          thumb-label
          :disabled="!tensImages.length"
          :min="0"
          :max="dimensions.height"
        />
        <v-alert v-if="onesError" type="error">{{ onesError }}</v-alert>
        <h3>{{ tPosition }} - {{ tOnes }}</h3>
        <v-slider
          v-model="onesX"
          label="X:"
          step="1"
          thumb-label
          :disabled="!onesImages.length"
          :min="0"
          :max="dimensions.width"
        />
        <v-slider
          v-model="onesY"
          label="Y:"
          step="1"
          thumb-label
          :disabled="!onesImages.length"
          :min="0"
          :max="dimensions.height"
        />
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>
