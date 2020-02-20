export default {
  computed: {
    dimensions () {
      return {
        height: this.$store.state.device.dimensions.height,
        width: this.$store.state.device.dimensions.width
      }
    },
    enabled () {
      return this.$store.state.background.enabled
    },
    position () {
      const x = this.$store.state.background.x
      const y = this.$store.state.background.y
      return { x, y }
    }
  },
  data () {
    return {
      imageUrl: null
    }
  },
  methods: {
    onFilePick () {
      if (this.enabled) {
        this.$store.commit('background/toggle', false)
        this.$refs.imageInput.value = null
      } else {
        this.$refs.imageInput.click()
      }
    },
    onFilePicked (event) {
      const file = event.target.files[0]

      const fileReader = new FileReader()
      fileReader.addEventListener('load', (event) => {
        this.$store.commit('background/changeImage', event.target.result)
      })
      fileReader.readAsDataURL(file)
    },
    onXChange (x) {
      this.$store.commit('background/changeX', x)
    },
    onYChange (y) {
      this.$store.commit('background/changeY', y)
    }
  }
}
