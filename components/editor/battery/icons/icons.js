export default {
  data () {
    return {
      error: '',
      expanded: false,
      tab: 0
    }
  },
  computed: {
    coords: {
      get () { return this.$store.state.battery.icons.coords },
      set (coords) { this.$store.commit('battery/icons', { coords }) }
    },
    dimensions () {
      return {
        height: this.$store.state.device.size.height,
        width: this.$store.state.device.size.width
      }
    },
    images: {
      get () { return this.$store.state.battery.icons.images },
      set (images) { this.$store.commit('battery/icons', { images }) }
    },
    tPosition () {
      return this.$t('app.position')
    },
    tPositionDescription () {
      return this.$t('app.positionDescription')
    },
    tTitle () {
      return this.$t('battery.icons.title')
    },
    tTitleDescription () {
      return this.$t('battery.icons.titleDescription')
    },
    x: {
      get () { return this.coords[this.tab][0] },
      set (x) { this.changeX(x) }
    },
    y: {
      get () { return this.coords[this.tab][1] },
      set (y) { this.changeY(y) }
    }
  },
  methods: {
    changeX (x) {
      const coords = this.coords
      coords[this.tab][0] = x
      this.coords = coords
    },
    changeY (y) {
      const coords = this.coords
      coords[this.tab][1] = y
      this.coords = coords
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
          this.error = this.$t('battery.icons.error')
        }
      }
    }
  }
}
