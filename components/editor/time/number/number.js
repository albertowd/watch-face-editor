export default {
  props: {
    name: {
      default: 'hours',
      type: String
    }
  },
  data () {
    return {
      expanded: false,
      onesError: '',
      tensError: ''
    }
  },
  computed: {
    dimensions () {
      return {
        height: this.$store.state.device.size.height,
        width: this.$store.state.device.size.width
      }
    },
    onesImages: {
      get () { return this.$store.state.time[this.name].ones.images },
      set (images) { this.change({ images }, 'Ones') }
    },
    onesX: {
      get () { return this.$store.state.time[this.name].ones.x },
      set (x) { this.change({ x }, 'Ones') }
    },
    onesY: {
      get () { return this.$store.state.time[this.name].ones.y },
      set (y) { this.change({ y }, 'Ones') }
    },
    tensImages: {
      get () { return this.$store.state.time[this.name].tens.images },
      set (images) { this.change({ images }, 'Tens') }
    },
    tensX: {
      get () { return this.$store.state.time[this.name].tens.x },
      set (x) { this.change({ x }, 'Tens') }
    },
    tensY: {
      get () { return this.$store.state.time[this.name].tens.y },
      set (y) { this.change({ y }, 'Tens') }
    },
    tOnes () {
      return this.$t('app.ones')
    },
    tOnesDescription () {
      return this.$t('app.onesDescription')
    },
    tPosition () {
      return this.$t('app.position')
    },
    tPositionDescription () {
      return this.$t('app.positionDescription')
    },
    tTens () {
      return this.$t('app.tens')
    },
    tTensDescription () {
      return this.$t('app.tensDescription')
    },
    tTitle () {
      return this.$t(`time.${this.name}`)
    },
    tTitleDescription () {
      return this.$t(`time.${this.name}Description`)
    }
  },
  methods: {
    change (obj, sub = '') {
      this.$store.commit(`time/${this.name}${sub}`, obj)
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
    onesFilePick () {
      if (this.onesImages.length) {
        this.onesImages = []
      } else {
        this.$refs.onesInput.click()
      }
    },
    onesFilePicked (event) {
      const files = Object.values(event.target.files)
      this.$refs.onesInput.value = null
      this.onesError = ''

      if (files.length) {
        if (files.length !== 10) {
          this.onesError = this.$t('time.errors.numbers')
          return
        }

        const promises = []

        for (const file of files) {
          promises.push(this.imagePromise(file))
        }

        Promise.all(promises).then((images) => {
          this.onesImages = images
          this.$emit('newImages', images)
        })
      }
    },
    tensFilePick () {
      if (this.tensImages.length) {
        this.tensImages = []
      } else {
        this.$refs.tensInput.click()
      }
    },
    tensFilePicked (event) {
      const files = Object.values(event.target.files)
      this.$refs.tensInput.value = null
      this.tensError = ''

      if (files.length) {
        if (files.length !== 10) {
          this.tensError = this.$t('time.errors.numbers')
          return
        }

        const promises = []

        for (const file of files) {
          promises.push(this.imagePromise(file))
        }

        Promise.all(promises).then((images) => {
          this.tensImages = images
          this.$emit('newImages', images)
        })
      }
    }
  }
}
