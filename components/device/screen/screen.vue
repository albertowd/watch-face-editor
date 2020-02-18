<script src="./screen.js" />
<style src="./screen.css"></style>
<template>
  <div class="screen" :style="position" @click="toggleExample">
    <div>
      <div class="draw" />
      <v-img v-if="showExample" alt="Device image." class="example" :src="'/devices/' + alias + '.example.png'" />
    </div>
  </div>
</template>
