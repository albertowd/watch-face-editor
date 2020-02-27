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
    changeBackground (obj) {
      this.$store.commit('background/import', obj)
    },
    changeX (x) {
      this.changeBackground({ x })
    },
    changeY (y) {
      this.changeBackground({ y })
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
        this.changeBackground({ image: event.target.result })
      }
      fileReader.readAsDataURL(file)
    }
  }
}
