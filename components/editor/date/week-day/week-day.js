export default {
  data () {
    return {
      error: ''
    }
  },
  computed: {
    images () {
      return this.$store.state.date.weekDay.images
    },
    position () {
      return {
        x: this.$store.state.date.weekDay.x,
        y: this.$store.state.date.weekDay.y
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
      return this.$t('date.weekDay.title')
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
        this.$store.commit('json/json', { changed: true })
      } else {
        this.$refs.pngInput.click()
      }
    },
    onFilePicked (event) {
      const files = Object.values(event.target.files)
      this.$refs.pngInput.value = null
      this.error = ''

      if (files.length) {
        if (files.length !== 7 && files.length !== 14 && files.length !== 21) {
          this.error = this.$t('date.weekDay.error')
          return
        }

        const promises = []

        for (const file of files) {
          promises.push(this.imagePromise(file))
        }

        Promise.all(promises).then((images) => {
          this.$store.commit('date/weekDay', { images })
          this.$store.commit('json/json', { changed: true })
        })
      }
    },
    onXChange (x) {
      this.$store.commit('date/weekDay', { x })
      this.$store.commit('json/json', { changed: true })
    },
    onYChange (y) {
      this.$store.commit('date/weekDay', { y })
      this.$store.commit('json/json', { changed: true })
    }
  }
}
