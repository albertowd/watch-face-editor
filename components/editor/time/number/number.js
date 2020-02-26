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
    onesImages () {
      return this.$store.state.time[this.name].ones.images
    },
    onesPosition () {
      return {
        x: this.$store.state.time[this.name].ones.x,
        y: this.$store.state.time[this.name].ones.y
      }
    },
    tensImages () {
      return this.$store.state.time[this.name].tens.images
    },
    tensPosition () {
      return {
        x: this.$store.state.time[this.name].tens.x,
        y: this.$store.state.time[this.name].tens.y
      }
    },
    size () {
      return {
        height: this.$store.state.device.size.height,
        width: this.$store.state.device.size.width
      }
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
        this.$store.commit(`time/${this.name}Ones`, { images: [] })
        this.$store.commit('json/json', { changed: true })
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
          this.onesError = this.$t('time.error')
          return
        }

        const promises = []

        for (const file of files) {
          promises.push(this.imagePromise(file))
        }

        Promise.all(promises).then((images) => {
          this.$store.commit(`time/${this.name}Ones`, { images })
          this.$store.commit('json/json', { changed: true })
          if (!this.tensImages.length) {
            this.$store.commit(`time/${this.name}Tens`, { images })
            this.$store.commit('json/json', { changed: true })
          }
        })
      }
    },
    tensFilePick () {
      if (this.tensImages.length) {
        this.$store.commit(`time/${this.name}Tens`, { images: [] })
        this.$store.commit('json/json', { changed: true })
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
          this.tensError = this.$t('time.error')
          return
        }

        const promises = []

        for (const file of files) {
          promises.push(this.imagePromise(file))
        }

        Promise.all(promises).then((images) => {
          this.$store.commit(`time/${this.name}Tens`, { images })
          this.$store.commit('json/json', { changed: true })
          if (!this.onesImages.length) {
            this.$store.commit(`time/${this.name}Ones`, { images })
            this.$store.commit('json/json', { changed: true })
          }
        })
      }
    },
    onOnesXChange (x) {
      this.$store.commit(`time/${this.name}Ones`, { x })
      this.$store.commit('json/json', { changed: true })
    },
    onOnesYChange (y) {
      this.$store.commit(`time/${this.name}Ones`, { y })
      this.$store.commit('json/json', { changed: true })
    },
    onTensXChange (x) {
      this.$store.commit(`time/${this.name}Tens`, { x })
      this.$store.commit('json/json', { changed: true })
    },
    onTensYChange (y) {
      this.$store.commit(`time/${this.name}Tens`, { y })
      this.$store.commit('json/json', { changed: true })
    }
  }
}
