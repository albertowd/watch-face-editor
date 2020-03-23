<script src="./preview.js" />
<style scoped src="./preview.css"></style>
<template>
  <div class="device-preview" :style="size">
    <v-img class="device-preview-watch" :src="'/watch-face-editor/devices/' + alias + '.watch.png'" :style="size" />
    <div class="device-preview-draw-wrapper" :style="position">
      <div class="device-preview-draw" :style="relativePosition">
        <div ref="devicePreviewDrawScreen" class="device-preview-draw-screen">
          <screen />
        </div>
        <v-img v-if="showExample" class="device-preview-example" :src="`/watch-face-editor/devices/${alias}.example.png`" />
      </div>
    </div>
  </div>
</template>
