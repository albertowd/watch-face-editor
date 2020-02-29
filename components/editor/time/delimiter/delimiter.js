export default {
  computed: {
    image () {
      return this.$store.state.time.delimiter.image
    },
    position () {
      return {
        x: this.$store.state.time.delimiter.x,
        y: this.$store.state.time.delimiter.y
      }
    },
    size () {
      return {
        height: this.$store.state.device.size.height,
        width: this.$store.state.device.size.width
      }
    },
    tPosition () {
      return this.$t('app.position')
    },
    tTitle () {
      return this.$t('app.delimiter')
    }
  },
  methods: {
    onFilePick () {
      if (this.image) {
        this.$store.commit('time/changeDelimiter', { image: null })
      } else {
        this.$refs.delimiterInput.click()
      }
    },
    onFilePicked (event) {
      const file = event.target.files[0]
      this.$refs.delimiterInput.value = null

      const fileReader = new FileReader()
      fileReader.onload = (event) => {
        this.$store.commit('time/changeDelimiter', { image: event.target.result })
      }
      fileReader.readAsDataURL(file)
    },
    onXChange (x) {
      this.$store.commit('time/changeDelimiter', { x })
    },
    onYChange (y) {
      this.$store.commit('time/changeDelimiter', { y })
    }
  }
}
