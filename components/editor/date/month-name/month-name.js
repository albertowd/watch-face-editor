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
    images: {
      get () { return this.$store.state.date.monthAndDay.separate.monthName.images },
      set (images) { this.$store.commit('date/monthAndDayMonthName', { images }) }
    },
    tPosition () {
      return this.$t('app.position')
    },
    tTitle () {
      return this.$t('date.monthAndDay.separate.monthName.title')
    },
    x: {
      get () { return this.$store.state.date.monthAndDay.separate.monthName.x },
      set (x) { this.$store.commit('date/monthAndDayMonthName', { x }) }
    },
    y: {
      get () { return this.$store.state.date.monthAndDay.separate.monthName.y },
      set (y) { this.$store.commit('date/monthAndDayMonthName', { y }) }
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
        this.images = []
      } else {
        this.$refs.pngInput.click()
      }
    },
    onFilePicked (event) {
      const files = Object.values(event.target.files)
      this.$refs.pngInput.value = null
      this.error = ''

      if (files.length) {
        if (files.length === 12) {
          const promises = []

          for (const file of files) {
            promises.push(this.imagePromise(file))
          }

          Promise.all(promises).then((images) => {
            this.images = images
          })
        } else {
          this.error = this.$t('date.monthAndDay.separate.monthName.error')
        }
      }
    }
  }
}
