export default {
  data () {
    return {
      error: ''
    }
  },
  computed: {
    dimensions () {
      return {
        height: this.$store.state.device.size.height,
        width: this.$store.state.device.size.width
      }
    },
    amImages: {
      get () { return this.$store.state.time.ampm.imagesAM },
      set (imagesAM) { this.changeAmPm({ imagesAM }) }
    },
    pmImages: {
      get () { return this.$store.state.time.ampm.imagesPM },
      set (imagesPM) { this.changeAmPm({ imagesPM }) }
    },
    tPosition () {
      return this.$t('app.position')
    },
    tTitle () {
      return this.$t('time.ampm')
    },
    x: {
      get () { return this.$store.state.time.ampm.x },
      set (x) { this.changeAmPm({ x }) }
    },
    y: {
      get () { return this.$store.state.time.ampm.y },
      set (y) { this.changeAmPm({ y }) }
    }
  },
  methods: {
    changeAmPm (obj) {
      this.$store.commit('time/ampm', obj)
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
    amFilePick () {
      if (this.amImages.length) {
        this.amImages = []
      } else {
        this.$refs.amInput.click()
      }
    },
    amFilePicked (event) {
      const files = Object.values(event.target.files)
      this.$refs.amInput.value = null
      this.error = ''

      if (files && [1, 2].includes(files.length)) {
        const promises = []

        for (const file of files) {
          promises.push(this.imagePromise(file))
        }

        Promise.all(promises).then((images) => {
          if (images.length === 1) {
            images = images.concat(images)
          }
          this.amImages = images
        })
      } else {
        this.error = this.$t('time.errors.ampm')
      }
    },
    pmFilePick () {
      if (this.pmImages.length) {
        this.pmImages = []
      } else {
        this.$refs.pmInput.click()
      }
    },
    pmFilePicked (event) {
      const files = Object.values(event.target.files)
      this.$refs.pmInput.value = null
      this.error = ''

      if (files && [1, 2].includes(files.length)) {
        const promises = []

        for (const file of files) {
          promises.push(this.imagePromise(file))
        }

        Promise.all(promises).then((images) => {
          if (images.length === 1) {
            images = images.concat(images)
          }
          this.pmImages = images
        })
      } else {
        this.error = this.$t('time.errors.ampm')
      }
    }
  }
}
