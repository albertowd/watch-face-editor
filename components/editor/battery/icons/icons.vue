<script src="./icons.js" />
<style scoped src="./icons.css"></style>
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
        <v-btn @click="imagesFilePick">
          <v-icon
            :color="images.length ? 'primary' : 'normal'"
          >
            {{ images.length ? 'mdi-image-off' : 'mdi-image-multiple' }}
          </v-icon>
        </v-btn>
        <input
          ref="imagesInput"
          accept=".png"
          class="editor-battery-icons-hidden"
          multiple
          type="file"
          @change="imagesFilePicked"
        />
      </v-layout>
    </v-card-title>
    <v-expand-transition>
      <v-card-text v-show="expanded">
        <v-alert v-if="error" type="error">{{ error }}</v-alert>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <h3 v-on="on">{{ tPosition }}</h3>
          </template>
          <span>{{ tPositionDescription }}</span>
        </v-tooltip>
        <v-tabs v-model="tab" grow>
          <v-tab>0%</v-tab>
          <v-tab>10%</v-tab>
          <v-tab>20%</v-tab>
          <v-tab>30%</v-tab>
          <v-tab>40%</v-tab>
          <v-tab>50%</v-tab>
          <v-tab>60%</v-tab>
          <v-tab>70%</v-tab>
          <v-tab>80%</v-tab>
          <v-tab>90%</v-tab>
          <v-tab>100%</v-tab>
        </v-tabs>
        <v-slider
          v-model="x"
          label="X:"
          step="1"
          thumb-label
          :disabled="!images.length"
          :min="0"
          :max="dimensions.width"
        />
        <v-slider
          v-model="y"
          label="Y:"
          step="1"
          thumb-label
          :disabled="!images.length"
          :min="0"
          :max="dimensions.height"
        />
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>
