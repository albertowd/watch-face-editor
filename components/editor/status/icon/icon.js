export default {
  props: {
    name: {
      default: 'alarm',
      type: String
    }
  },
  computed: {
    imageOff () {
      return this.$store.state.status[this.name].imageOff
    },
    imageOn () {
      return this.$store.state.status[this.name].imageOn
    },
    position () {
      return {
        x: this.$store.state.status[this.name].x,
        y: this.$store.state.status[this.name].y
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
      return this.$t(`status.${this.name}`)
    }
  },
  methods: {
    offFilePick () {
      if (this.imageOff) {
        this.$store.commit(`status/${this.name}`, { imageOff: null })
        this.$store.commit('json/json', { changed: true })
      } else {
        this.$refs.imageOffInput.click()
      }
    },
    offFilePicked (event) {
      const file = event.target.files[0]
      this.$refs.imageOffInput.value = null

      const fileReader = new FileReader()
      fileReader.onload = (event) => {
        this.$store.commit(`status/${this.name}`, { imageOff: event.target.result })
        this.$store.commit('json/json', { changed: true })
      }
      fileReader.readAsDataURL(file)
    },
    onFilePick () {
      if (this.imageOn) {
        this.$store.commit(`status/${this.name}`, { imageOn: null })
        this.$store.commit('json/json', { changed: true })
      } else {
        this.$refs.imageOnInput.click()
      }
    },
    onFilePicked (event) {
      const file = event.target.files[0]
      this.$refs.imageOnInput.value = null

      const fileReader = new FileReader()
      fileReader.onload = (event) => {
        this.$store.commit(`status/${this.name}`, { imageOn: event.target.result })
        this.$store.commit('json/json', { changed: true })
      }
      fileReader.readAsDataURL(file)
    },
    onXChange (x) {
      this.$store.commit(`status/${this.name}`, { x })
      this.$store.commit('json/json', { changed: true })
    },
    onYChange (y) {
      this.$store.commit(`status/${this.name}`, { y })
      this.$store.commit('json/json', { changed: true })
    }
  }
}
