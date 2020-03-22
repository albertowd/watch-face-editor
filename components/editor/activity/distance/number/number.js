export default {
  data () {
    return {
      error: '',
      expanded: false
    }
  },
  computed: {
    alignment: {
      get () { return this.$store.state.activity.distance.number.alignment },
      set (alignment) { this.changeDistance({ number: { alignment } }) }
    },
    alignmentIcon () {
      switch (this.$store.state.activity.distance.number.alignment) {
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
        { text: `${this.$t('app.bottom')} ${this.$t('app.center')}`, value: 'BottomCenter' },
        { text: `${this.$t('app.bottom')} ${this.$t('app.left')}`, value: 'BottomLeft' },
        { text: `${this.$t('app.bottom')} ${this.$t('app.right')}`, value: 'BottomRight' },
        { text: `${this.$t('app.center')}`, value: 'Center' },
        { text: `${this.$t('app.left')}`, value: 'Left' },
        { text: `${this.$t('app.right')}`, value: 'Right' },
        { text: `${this.$t('app.top')} ${this.$t('app.center')}`, value: 'TopCenter' },
        { text: `${this.$t('app.top')} ${this.$t('app.left')}`, value: 'TopLeft' },
        { text: `${this.$t('app.top')} ${this.$t('app.right')}`, value: 'TopRight' }
      ]
    },
    bottom: {
      get () { return this.$store.state.activity.distance.number.bottom },
      set (bottom) { this.changeDistance({ number: { bottom } }) }
    },
    decimalImage: {
      get () { return this.$store.state.activity.distance.decimalImage },
      set (decimalImage) { this.changeDistance({ decimalImage }) }
    },
    dimensions () {
      return {
        height: this.$store.state.device.size.height,
        width: this.$store.state.device.size.width
      }
    },
    images: {
      get () { return this.$store.state.activity.distance.number.images },
      set (images) { this.changeDistance({ number: { images } }) }
    },
    kmImage: {
      get () { return this.$store.state.activity.distance.kmImage },
      set (kmImage) { this.changeDistance({ kmImage }) }
    },
    left: {
      get () { return this.$store.state.activity.distance.number.left },
      set (left) { this.changeDistance({ number: { left } }) }
    },
    right: {
      get () { return this.$store.state.activity.distance.number.right },
      set (right) { this.changeDistance({ number: { right } }) }
    },
    spacing: {
      get () { return this.$store.state.activity.distance.number.spacing },
      set (spacing) { this.changeDistance({ number: { spacing } }) }
    },
    top: {
      get () { return this.$store.state.activity.distance.number.top },
      set (top) { this.changeDistance({ number: { top } }) }
    },
    tAlignment () {
      return this.$t('app.alignment')
    },
    tBottom () {
      return this.$t('app.bottom')
    },
    tDecimal () {
      return this.$t('app.decimal')
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
      return this.$t('activity.distance.number.title')
    },
    tTitleDescription () {
      return this.$t('activity.distance.number.titleDescription')
    },
    tTop () {
      return this.$t('app.top')
    }
  },
  methods: {
    changeDistance (obj) {
      this.$store.commit('activity/distance', obj)
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
    decimalFilePick () {
      if (this.decimalImage) {
        this.decimalImage = null
      } else {
        this.$refs.decimalInput.click()
      }
    },
    decimalFilePicked (event) {
      const file = event.target.files[0]
      this.$refs.decimalInput.value = null

      if (file) {
        this.imagePromise(file).then((image) => { this.decimalImage = image })
      }
    },
    kmFilePick () {
      if (this.kmImage) {
        this.kmImage = null
      } else {
        this.$refs.kmInput.click()
      }
    },
    kmFilePicked (event) {
      const file = event.target.files[0]
      this.$refs.kmInput.value = null

      if (file) {
        this.imagePromise(file).then((image) => { this.kmImage = image })
      }
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
          this.error = this.$t('activity.distance.number.error')
        }
      }
    }
  }
}
