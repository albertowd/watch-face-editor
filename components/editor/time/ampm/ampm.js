export default {
  data () {
    return {
      error: ''
    }
  },
  computed: {
    amImages () {
      return this.$store.state.time.ampm.imagesAM
    },
    pmImages () {
      return this.$store.state.time.ampm.imagesPM
    },
    position () {
      return {
        x: this.$store.state.time.ampm.x,
        y: this.$store.state.time.ampm.y
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
      return this.$t('time.ampm')
    }
  },
  methods: {
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
        this.$store.commit('time/changeAmPm', { imagesAM: [] })
      } else {
        this.$refs.amInput.click()
      }
    },
    amFilePicked (event) {
      const files = Object.values(event.target.files)
      this.$refs.amInput.value = null
      this.error = ''

      if (files && (files.length === 1 || files.length === 2)) {
        const promises = []

        for (const file of files) {
          promises.push(this.imagePromise(file))
        }

        Promise.all(promises).then((images) => {
          this.$store.commit('time/changeAmPm', { imagesAM: images })
        })
      } else {
        this.error = this.$t('time.errors.ampm')
      }
    },
    pmFilePick () {
      if (this.pmImages.length) {
        this.$store.commit('time/changeAmPm', { imagesPM: [] })
      } else {
        this.$refs.pmInput.click()
      }
    },
    pmFilePicked (event) {
      const files = Object.values(event.target.files)
      this.$refs.pmInput.value = null
      this.error = ''

      if (files && (files.length === 1 || files.length === 2)) {
        const promises = []

        for (const file of files) {
          promises.push(this.imagePromise(file))
        }

        Promise.all(promises).then((images) => {
          this.$store.commit('time/changeAmPm', { imagesPM: images })
        })
      } else {
        this.error = this.$t('time.errors.ampm')
      }
    },
    onXChange (x) {
      this.$store.commit('time/changeAmPm', { x })
    },
    onYChange (y) {
      this.$store.commit('time/changeAmPm', { y })
    }
  }
}
