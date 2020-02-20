<script src="./screen.js" />
<style src="./screen.css"></style>
<template>
  <div class="screen" :style="position" @click="toggleExample">
    <div>
      <div class="draw">
        <background />
      </div>
      <v-img v-if="showExample" alt="Device face example." class="example" :src="'/devices/' + model + '.example.png'" />
    </div>
  </div>
</template>
