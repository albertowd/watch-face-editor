export default {
  data () {
    return {
      error: '',
      expanded: false
    }
  },
  computed: {
    alignment: {
      get () { return this.$store.state.date.monthAndDay.oneLine.number.alignment },
      set (alignment) {
        this.changeOneLine({ number: { alignment } })
      }
    },
    alignmentIcon () {
      switch (this.$store.state.date.monthAndDay.oneLine.number.alignment) {
        case 'BottomCenter':
          return 'mdi-pan-down'
        case 'BottomLeft':
          return 'mdi-pan-bottom-left'
        case 'BottomRight':
          return 'mdi-pan-bottom-right'
        case 'Center':
          return 'mdi-pan'
        case 'Left':
          return 'mdi-pan-left'
        case 'Right':
          return 'mdi-pan-right'
        case 'TopCenter':
          return 'mdi-pan-up'
        case 'TopLeft':
          return 'mdi-pan-top-left'
        case 'TopRight':
          return 'mdi-pan-top-right'
      }
    },
    alignmentItems () {
      return [
        { text: `${this.$t('app.bottom')}${this.$t('app.center')}`, value: 'BottomCenter' },
        { text: `${this.$t('app.bottom')}${this.$t('app.left')}`, value: 'BottomLeft' },
        { text: `${this.$t('app.bottom')}${this.$t('app.right')}`, value: 'BottomRight' },
        { text: `${this.$t('app.center')}`, value: 'Center' },
        { text: `${this.$t('app.left')}`, value: 'Left' },
        { text: `${this.$t('app.right')}`, value: 'Right' },
        { text: `${this.$t('app.top')}${this.$t('app.center')}`, value: 'TopCenter' },
        { text: `${this.$t('app.top')}${this.$t('app.left')}`, value: 'TopLeft' },
        { text: `${this.$t('app.top')}${this.$t('app.right')}`, value: 'TopRight' }
      ]
    },
    bottom: {
      get () { return this.$store.state.date.monthAndDay.oneLine.number.bottom },
      set (bottom) { this.changeOneLine({ number: { bottom } }) }
    },
    delimiterImage: {
      get () { return this.$store.state.date.monthAndDay.oneLine.delimiterImage },
      set (delimiterImage) { this.changeOneLine({ delimiterImage }) }
    },
    dimensions () {
      return {
        height: this.$store.state.device.size.height,
        width: this.$store.state.device.size.width
      }
    },
    numberImages: {
      get () { return this.$store.state.date.monthAndDay.oneLine.number.images },
      set (images) { this.changeOneLine({ number: { images } }) }
    },
    left: {
      get () { return this.$store.state.date.monthAndDay.oneLine.number.left },
      set (left) { this.changeOneLine({ number: { left } }) }
    },
    right: {
      get () { return this.$store.state.date.monthAndDay.oneLine.number.right },
      set (right) { this.changeOneLine({ number: { right } }) }
    },
    spacing: {
      get () { return this.$store.state.date.monthAndDay.oneLine.number.spacing },
      set (spacing) { this.changeOneLine({ number: { spacing } }) }
    },
    top: {
      get () { return this.$store.state.date.monthAndDay.oneLine.number.top },
      set (top) { this.changeOneLine({ number: { top } }) }
    },
    tAlignment () {
      return this.$t('app.alignment')
    },
    tBottom () {
      return this.$t('app.bottom')
    },
    tDelimiter () {
      return this.$t('date.monthAndDay.oneLine.delimiter')
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
      return this.$t('date.monthAndDay.oneLine.title')
    },
    tTop () {
      return this.$t('app.top')
    }
  },
  methods: {
    changeOneLine (obj) {
      this.$store.commit('date/monthAndDayOneLine', obj)
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
