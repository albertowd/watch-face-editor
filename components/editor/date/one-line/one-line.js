export default {
  data () {
    return {
      error: ''
    }
  },
  computed: {
    bottom: {
      get () { return this.$store.state.date.monthAndDay.oneLine.number.bottom },
      set (bottom) { this.$store.commit('date/monthAndDayOneLine', { number: { bottom } }) }
    },
    delimiterImage: {
      get () { return this.$store.state.date.monthAndDay.oneLine.delimiterImage },
      set (delimiterImage) { this.$store.commit('date/monthAndDayOneLine', { delimiterImage }) }
    },
    dimensions () {
      return {
        height: this.$store.state.device.size.height,
        width: this.$store.state.device.size.width
      }
    },
    numberImages: {
      get () { return this.$store.state.date.monthAndDay.oneLine.number.images },
      set (images) { this.$store.commit('date/monthAndDayOneLine', { number: { images } }) }
    },
    left: {
      get () { return this.$store.state.date.monthAndDay.oneLine.number.left },
      set (left) { this.$store.commit('date/monthAndDayOneLine', { number: { left } }) }
    },
    right: {
      get () { return this.$store.state.date.monthAndDay.oneLine.number.right },
      set (right) { this.$store.commit('date/monthAndDayOneLine', { number: { right } }) }
    },
    spacing: {
      get () { return this.$store.state.date.monthAndDay.oneLine.number.spacing },
      set (spacing) { this.$store.commit('date/monthAndDayOneLine', { number: { spacing } }) }
    },
    top: {
      get () { return this.$store.state.date.monthAndDay.oneLine.number.top },
      set (top) { this.$store.commit('date/monthAndDayOneLine', { number: { top } }) }
    },
    tAlignment () {
      return this.$t('app.alignment')
    },
    tHeight () {
      return this.$t('app.height')
    },
    tNumbers () {
      return this.$t('app.numbers')
    },
    tPosition () {
      return this.$t('app.position')
    },
    tSpacing () {
      return this.$t('app.spacing')
    },
    tSize () {
      return this.$t('app.size')
    },
    tTitle () {
      return this.$t('date.monthAndDay.oneLine.title')
    },
    tWidth () {
      return this.$t('app.width')
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
    delimiterFilePick () {
      if (this.delimiterImage) {
        this.delimiterImage = null
      } else {
        this.$refs.delimiterInput.click()
      }
    },
    delimiterFilePicked (event) {
      const file = event.target.files[0]
      this.$refs.delimiterInput.value = null
      this.imagePromise(file).then((image) => { this.delimiterImage = image })
    },
    numberFilePick () {
      if (this.numberImages.length) {
        this.numberImages = []
      } else {
        this.$refs.numberInput.click()
      }
    },
    numberFilePicked (event) {
      const files = Object.values(event.target.files)
      this.$refs.numberInput.value = null
      this.error = ''

      if (files.length) {
        if (files.length === 10) {
          const promises = []

          for (const file of files) {
            promises.push(this.imagePromise(file))
          }

          Promise.all(promises).then((images) => {
            this.numberImages = images
          })
        } else {
          this.error = this.$t('date.monthAndDay.oneLine.error')
        }
      }
    }
  }
}
