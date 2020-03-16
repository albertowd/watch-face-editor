export default {
  computed: {
    image () {
      return this.$store.state.background.image.image
    },
    position () {
      const background = this.$store.state.background.image
      return {
        left: `${background.x}px`,
        top: `${background.y}px`
      }
    }
  }
}
