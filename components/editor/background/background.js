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
      this.$store.commit('background/changeX', x)
    },
    changeY (y) {
      this.$store.commit('background/changeY', y)
    },
    pickImage () {
      if (this.image) {
        this.$store.commit('background/changeImage', null)
        this.$refs.imageInput.value = null
      } else {
        this.$refs.imageInput.click()
      }
    },
    uploadImage (event) {
      const file = event.target.files[0]

      const fileReader = new FileReader()
      fileReader.addEventListener('load', (event) => {
        this.$store.commit('background/changeImage', event.target.result)
      })
      fileReader.readAsDataURL(file)
    }
  }
}
