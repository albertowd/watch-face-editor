export default {
  computed: {
    image () {
      return this.$store.state.battery.percent.image
    },
    position () {
      const percent = this.$store.state.battery.percent
      return {
        left: `${percent.x}px`,
        top: `${percent.y}px`
      }
    }
  }
}
