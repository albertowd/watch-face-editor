export default {
  data () {
    return {
      error: '',
      expanded: false
    }
  },
  computed: {
    dimensions () {
      return {
        height: this.$store.state.device.size.height,
        width: this.$store.state.device.size.width
      }
    },
    images: {
      get () { return this.$store.state.battery.images.images },
      set (images) { this.changeImages({ images }) }
    },
    tPosition () {
      return this.$t('app.position')
    },
    tPositionDescription () {
      return this.$t('app.positionDescription')
    },
    tTitle () {
      return this.$t('battery.images.title')
    },
    tTitleDescription () {
      return this.$t('battery.images.titleDescription')
    },
    x: {
      get () { return this.$store.state.battery.images.x },
      set (x) { this.changeImages({ x }) }
    },
    y: {
      get () { return this.$store.state.battery.images.y },
      set (y) { this.changeImages({ y }) }
    }
  },
  methods: {
    changeImages (obj) {
      this.$store.commit('battery/images', obj)
    },
    imagePromise (file) {
      return new Promise((resolve) => {
        const fileReader = new FileReader()
        fileReader.onload = (event) => {
          resolve(event.target.result)
        }
        fileReader.readAsDataURL(file)
      })
    },
    imagesFilePick () {
      if (this.images.length) {
        this.images = []
      } else {
        this.$refs.imagesInput.click()
      }
    },
    imagesFilePicked (event) {
      const files = Object.values(event.target.files)
      this.$refs.imagesInput.value = null
      this.error = ''

      if (files.length) {
        if (files.length === 11) {
          const promises = []

          for (const file of files) {
            promises.push(this.imagePromise(file))
          }

          Promise.all(promises).then((images) => {
            this.images = images
          })
        } else {
          this.error = this.$t('battery.images.error')
        }
      }
    }
  }
}
