export default {
  data () {
    return {
      index: 0
    }
  },
  computed: {
    images () {
      return this.$store.state.battery.images.images
    },
    position () {
      const images = this.$store.state.battery.images
      return {
        left: `${images.x}px`,
        top: `${images.y}px`
      }
    }
  },
  methods: {
    circle () {
      this.index = (this.index + 1) % this.images.length
    }
  }
}
