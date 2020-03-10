export default {
  computed: {
    dimensions () {
      return {
        height: this.$store.state.device.size.height,
        width: this.$store.state.device.size.width
      }
    },
    image: {
      get () { return this.$store.state.background.image },
      set (image) { this.changeBackground({ image }) }
    },
    tPosition () {
      return this.$t('app.position')
    },
    tTitle () {
      return this.$t('background.title')
    },
    x: {
      get () { return this.$store.state.background.x },
      set (x) { this.changeBackground({ x }) }
    },
    y: {
      get () { return this.$store.state.background.y },
      set (y) { this.changeBackground({ y }) }
    }
  },
  methods: {
    changeBackground (obj) {
      this.$store.commit('background/import', obj)
    },
    pickImage () {
      if (this.image) {
        this.changeBackground({ image: null })
      } else {
        this.$refs.imageInput.click()
      }
    },
    uploadImage (event) {
      const file = event.target.files[0]
      this.$refs.imageInput.value = null

      const fileReader = new FileReader()
      fileReader.onload = (event) => {
        this.image = event.target.result
      }
      fileReader.readAsDataURL(file)
    }
  }
}
