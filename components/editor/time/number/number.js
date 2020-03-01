export default {
  props: {
    name: {
      default: 'hours',
      type: String
    }
  },
  data () {
    return {
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
    onesImages () {
      return this.$store.state.time[this.name].ones.images
    },
    onesX: {
      get () { return this.$store.state.time[this.name].ones.x },
      set (x) { this.change({ x }, 'Ones') }
    },
    onesY: {
      get () { return this.$store.state.time[this.name].ones.y },
      set (y) { this.change({ y }, 'Ones') }
    },
    tensImages () {
      return this.$store.state.time[this.name].tens.images
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
    tPosition () {
      return this.$t('app.position')
    },
    tTens () {
      return this.$t('app.tens')
    },
    tTitle () {
      return this.$t(`time.${this.name}`)
    }
  },
  methods: {
    change (obj, sub = '') {
      this.$store.commit(`time/${this.name}${sub}`, obj)
    },
    changeImages (images, name, sub, store = this.$store) {
      store.commit(`time/${name}${sub}`, { images })
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
        this.change({ images: [] }, 'Ones')
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
          this.change({ images }, 'Ones')
          this.$emit('newImages', images)
        })
      }
    },
    tensFilePick () {
      if (this.tensImages.length) {
        this.change({ images: [] }, 'Tens')
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
          this.change({ images }, 'Tens')
          this.$emit('newImages', images)
        })
      }
    }
  }
}
