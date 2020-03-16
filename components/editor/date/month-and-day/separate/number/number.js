export default {
  props: {
    name: {
      default: 'day',
      type: String
    }
  },
  data () {
    return {
      error: '',
      expanded: false
    }
  },
  computed: {
    alignment: {
      get () { return this.$store.state.date.monthAndDay.separate[this.name].alignment },
      set (alignment) { this.changeNumber({ alignment }) }
    },
    alignmentIcon () {
      switch (this.$store.state.date.year.oneLine.number.alignment) {
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
      get () { return this.$store.state.date.monthAndDay.separate[this.name].bottom },
      set (bottom) { this.changeNumber({ bottom }) }
    },
    dimensions () {
      return {
        height: this.$store.state.device.size.height,
        width: this.$store.state.device.size.width
      }
    },
    images: {
      get () { return this.$store.state.date.monthAndDay.separate[this.name].images },
      set (images) { this.changeNumber({ images }) }
    },
    left: {
      get () { return this.$store.state.date.monthAndDay.separate[this.name].left },
      set (left) { this.changeNumber({ left }) }
    },
    right: {
      get () { return this.$store.state.date.monthAndDay.separate[this.name].right },
      set (right) { this.changeNumber({ right }) }
    },
    spacing: {
      get () { return this.$store.state.date.monthAndDay.separate[this.name].spacing },
      set (spacing) { this.changeNumber({ spacing }) }
    },
    subName () {
      return this.name.substr(0, 1).toUpperCase() + this.name.substring(1)
    },
    top: {
      get () { return this.$store.state.date.monthAndDay.separate[this.name].top },
      set (top) { this.changeNumber({ top }) }
    },
    tAlignment () {
      return this.$t('app.alignment')
    },
    tBottom () {
      return this.$t('app.bottom')
    },
    tDimensions () {
      return this.$t('app.dimensions')
    },
    tDimensionsDescription () {
      return this.$t('app.dimensionsDescription')
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
      return this.$t(`date.monthAndDay.separate.${this.name}.title`)
    },
    tTitleDescription () {
      return this.$t(`date.monthAndDay.separate.${this.name}.titleDescription`)
    },
    tTop () {
      return this.$t('app.top')
    }
  },
  methods: {
    changeNumber (obj) {
      this.$store.commit(`date/monthAndDay${this.subName}`, obj)
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
    numberFilePick () {
      if (this.images.length) {
        this.images = []
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
            this.images = images
          })
        } else {
          this.error = this.$t(`date.monthAndDay.separate.${this.name}.error`)
        }
      }
    }
  }
}
