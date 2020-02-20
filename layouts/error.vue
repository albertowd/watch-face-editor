<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    errorMessage () {
      return `${this.error.statusCode} - ${
        this.error.statusCode === 404
          ? this.$t('app.errors.notFound')
          : this.$t('app.errors.unknown')
      }`
    }
  },
  head () {
    const errorMessage = this.errorMessage
    return {
      title: errorMessage
    }
  }
}
</script>
<style scoped src="./error.css"></style>
<template>
  <v-layout align-center column justify-center>
    <h1>{{ errorMessage }}</h1>
  </v-layout>
</template>
