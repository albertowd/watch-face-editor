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
    images () {
      return this.$store.state.date.weekDay.images
    },
    position () {
      return {
        x: this.$store.state.date.weekDay.x,
        y: this.$store.state.date.weekDay.y
      }
    },
    tPosition () {
      return this.$t('app.position')
    },
    tTitle () {
      return this.$t('date.weekDay.title')
    },
    x: {
      get () { return this.$store.state.date.weekDay.x },
      set (x) { this.$store.commit('date/weekDay', { x }) }
    },
    y: {
      get () { return this.$store.state.date.weekDay.y },
      set (y) { this.$store.commit('date/weekDay', { y }) }
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
    onFilePick () {
      if (this.images.length) {
        this.$store.commit('date/weekDay', { images: [] })
      } else {
        this.$refs.pngInput.click()
      }
    },
    onFilePicked (event) {
      const files = Object.values(event.target.files)
      this.$refs.pngInput.value = null
      this.error = ''

      if (files.length) {
        if ([7, 14, 21].includes(files.length)) {
          const promises = []

          for (const file of files) {
            promises.push(this.imagePromise(file))
          }

          Promise.all(promises).then((images) => {
            if (images.length === 7) {
              images = images.concat(images)
            }
            if (images.length === 14) {
              images = images.concat(images.slice(7))
            }
            this.$store.commit('date/weekDay', { images })
          })
        } else {
          this.error = this.$t('date.weekDay.error')
        }
      }
    }
  }
}
