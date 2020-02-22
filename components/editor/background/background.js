export default {
  computed: {
    dimensions () {
      return {
        height: this.$store.state.device.size.height,
        width: this.$store.state.device.size.width
      }
    },
    image () {
      return this.$store.state.background.image
    },
    position () {
      return {
        x: this.$store.state.background.x,
        y: this.$store.state.background.y
      }
    },
    tPosition () {
      return this.$t('app.position')
    },
    tTitle () {
      return this.$t('background.title')
    }
  },
  methods: {
    changeX (x) {
      this.$store.commit('background/background', { x })
      this.$store.commit('json/json', { example: false })
    },
    changeY (y) {
      this.$store.commit('background/background', { y })
      this.$store.commit('json/json', { example: false })
    },
    pickImage () {
      if (this.image) {
        this.$store.commit('background/background', { image: null })
      } else {
        this.$refs.imageInput.click()
      }
    },
    uploadImage (event) {
      const file = event.target.files[0]
      this.$refs.imageInput.value = null

      const fileReader = new FileReader()
      fileReader.onload = (event) => {
        this.$store.commit('background/background', { image: event.target.result })
        this.$store.commit('json/json', { example: false })
      }
      fileReader.readAsDataURL(file)
    }
  }
}
