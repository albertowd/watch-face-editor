<script src="./ampm.js" />
<style scoped src="./ampm.css"></style>
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
        <v-btn @click="amFilePick">
          <v-icon :color="amImages.length ? 'primary' : 'normal'">mdi-weather-sunset-up</v-icon>
        </v-btn>
        <input
          ref="amInput"
          accept=".png"
          class="editor-time-ampm-hidden"
          multiple
          type="file"
          @change="amFilePicked"
        />
        <v-btn class="ml-5" @click="pmFilePick">
          <v-icon :color="pmImages.length ? 'primary' : 'normal'">mdi-weather-sunset-down</v-icon>
        </v-btn>
        <input
          ref="pmInput"
          accept=".png"
          class="editor-time-ampm-hidden"
          multiple
          type="file"
          @change="pmFilePicked"
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
        <v-slider
          v-model="x"
          label="X:"
          step="1"
          thumb-label
          :disabled="!(amImages.length || pmImages.length)"
          :min="0"
          :max="dimensions.width"
        />
        <v-slider
          v-model="y"
          label="Y:"
          step="1"
          thumb-label
          :disabled="!(amImages.length || pmImages.length)"
          :min="0"
          :max="dimensions.height"
        />
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>
