export default {
  data () {
    return {
      error: ''
    }
  },
  computed: {
    alignment: {
      get () { return this.$store.state.date.year.oneLine.number.alignment },
      set (alignment) { this.changeOneLineNumber({ alignment }) }
    },
    bottom: {
      get () { return this.dimensions.height - this.$store.state.date.year.oneLine.number.bottom },
      set (bottom) { this.changeOneLineNumber({ bottom: this.dimensions.height - bottom }) }
    },
    dimensions () {
      return {
        height: this.$store.state.device.size.height,
        width: this.$store.state.device.size.width
      }
    },
    images: {
      get () { return this.$store.state.date.year.oneLine.number.images },
      set (images) { this.changeOneLineNumber({ images }) }
    },
    left: {
      get () { return this.$store.state.date.year.oneLine.number.left },
      set (left) { this.changeOneLineNumber({ left }) }
    },
    right: {
      get () { return this.dimensions.width - this.$store.state.date.year.oneLine.number.right },
      set (right) { this.changeOneLineNumber({ right: this.dimensions.width - right }) }
    },
    spacing: {
      get () { return this.$store.state.date.year.oneLine.number.spacing },
      set (spacing) { this.changeOneLineNumber({ spacing }) }
    },
    top: {
      get () { return this.$store.state.date.year.oneLine.number.top },
      set (top) { this.changeOneLineNumber({ top }) }
    },
    tAlignment () {
      return this.$t('app.alignment')
    },
    tBottom () {
      return this.$t('app.bottom')
    },
    tDimension () {
      return this.$t('app.dimensions')
    },
    tLeft () {
      return this.$t('app.left')
    },
    tRight () {
      return this.$t('app.right')
    },
    tSpacing () {
      return this.$t('app.spacing')
    },
    tTitle () {
      return this.$t('date.year.oneLine.title')
    },
    tTop () {
      return this.$t('app.top')
    }
  },
  methods: {
    changeOneLineNumber (obj) {
      this.$store.commit('date/yearOneLineNumber', obj)
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
    yearFilePick () {
      if (this.images.length) {
        this.images = []
      } else {
        this.$refs.yearInput.click()
      }
    },
    yearFilePicked (event) {
      const files = Object.values(event.target.files)
      this.$refs.yearInput.value = null
      this.error = ''

      if (files.length) {
        if (files.length === 10) {
          const promises = []

          for (const file of files) {
            promises.push(this.imagePromise(file))
          }

          Promise.all(promises).then((images) => {
            this.images = images
          })
        } else {
          this.error = this.$t('date.year.oneLine.error')
        }
      }
    }
  }
}
