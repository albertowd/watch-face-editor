<script src="./preview.js" />
<style src="./preview.css"></style>
<template>
  <div class="preview" :style="size">
    <v-img alt="Device image." class="watch" :src="'/devices/' + model + '.watch.png'" />
    <screen :example="example" />
  </div>
</template>
