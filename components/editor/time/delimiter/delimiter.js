export default {
  computed: {
    dimensions () {
      return {
        height: this.$store.state.device.size.height,
        width: this.$store.state.device.size.width
      }
    },
    image () {
      return this.$store.state.time.delimiter.image
    },
    tPosition () {
      return this.$t('app.position')
    },
    tTitle () {
      return this.$t('app.delimiter')
    },
    x: {
      get () { return this.$store.state.time.delimiter.x },
      set (x) { this.changeDelimiter({ x }) }
    },
    y: {
      get () { return this.$store.state.time.delimiter.y },
      set (y) { this.changeDelimiter({ y }) }
    }
  },
  methods: {
    changeDelimiter (obj) {
      this.$store.commit('time/delimiter', obj)
    },
    onFilePick () {
      if (this.image) {
        this.changeDelimiter({ image: null })
      } else {
        this.$refs.delimiterInput.click()
      }
    },
    onFilePicked (event) {
      const file = event.target.files[0]
      this.$refs.delimiterInput.value = null

      const fileReader = new FileReader()
      fileReader.onload = (event) => {
        this.changeDelimiter({ image: event.target.result })
      }
      fileReader.readAsDataURL(file)
    }
  }
}
