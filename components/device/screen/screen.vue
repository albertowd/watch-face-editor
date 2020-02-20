<script src="./screen.js" />
<style src="./screen.css"></style>
<template>
  <div class="screen" :style="position" @click="toggleExample">
    <div class="screen-relative">
      <div class="draw-wrapper">
        <div class="draw">
          <positionedImage name="background" />
          <positionedImage name="status.alarm" />
          <positionedImage name="status.bluetooth" />
          <positionedImage name="status.dnd" />
          <positionedImage name="status.lock" />
        </div>
      </div>
      <v-img v-if="showExample" class="example" :src="'/devices/' + model + '.example.png'" />
    </div>
  </div>
</template>
