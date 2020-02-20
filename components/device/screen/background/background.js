export default {
  computed: {
    enabled () {
      return this.$store.state.background.enabled
    },
    image () {
      return this.$store.state.background.image
    },
    position () {
      const background = this.$store.state.background
      return {
        left: `${background.x}px`,
        top: `${background.y}px`
      }
    }
  }
}
