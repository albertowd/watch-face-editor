export default {
  computed: {
    image () {
      return this.$store.state.time.delimiter.image
    },
    position () {
      return {
        left: `${this.$store.state.time.delimiter.x}px`,
        top: `${this.$store.state.time.delimiter.y}px`
      }
    }
  }
}
