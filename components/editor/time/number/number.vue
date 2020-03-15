<script src="./number.js" />
<style scoped src="./number.css"></style>
<template>
  <v-card outlined>
    <v-card-title>
      <v-layout>
        <v-btn text @click="expanded = !expanded">
          <v-icon>{{ expanded ? 'mdi-chevron-down' : 'mdi-chevron-right' }}</v-icon>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <h2 v-on="on">{{ tTitle }}</h2>
            </template>
            <span>{{ tTitleDescription }}</span>
          </v-tooltip>
        </v-btn>
        <v-spacer />
        <v-btn @click="tensFilePick">
          10
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
          1
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
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <h3 v-on="on">{{ tPosition }} - {{ tTens }}</h3>
          </template>
          <span>{{ tPositionDescription }} - {{ tTensDescription }}</span>
        </v-tooltip>
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
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <h3 v-on="on">{{ tPosition }} - {{ tOnes }}</h3>
          </template>
          <span>{{ tPositionDescription }} - {{ tOnesDescription }}</span>
        </v-tooltip>
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
