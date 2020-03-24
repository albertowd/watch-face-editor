export default {
  data () {
    return {
      index: 0
    }
  },
  computed: {
    coords () {
      return this.$store.state.battery.icons.coords
    },
    images () {
      return this.$store.state.battery.icons.images
    },
    position () {
      const coords = this.$store.state.battery.icons.coords
      return coords.map((coord) => {
        return {
          left: `${coord[0]}px`,
          position: 'absolute',
          top: `${coord[1]}px`
        }
      })
    }
  },
  methods: {
    circle () {
      this.index = (this.index + 1) % this.images.length
    }
  }
}
