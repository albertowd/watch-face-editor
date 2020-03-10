export default {
  props: {
    name: {
      default: 'alarm',
      type: String
    }
  },
  computed: {
    dimensions () {
      return {
        height: this.$store.state.device.size.height,
        width: this.$store.state.device.size.width
      }
    },
    imageOff: {
      get () { return this.$store.state.status[this.name].imageOff },
      set (imageOff) { this.changeStatus({ imageOff }) }
    },
    imageOn: {
      get () { return this.$store.state.status[this.name].imageOn },
      set (imageOn) { this.changeStatus({ imageOn }) }
    },
    tPosition () {
      return this.$t('app.position')
    },
    tTitle () {
      return this.$t(`status.${this.name}`)
    },
    x: {
      get () { return this.$store.state.status[this.name].x },
      set (x) { this.changeStatus({ x }) }
    },
    y: {
      get () { return this.$store.state.status[this.name].y },
      set (y) { this.changeStatus({ y }) }
    }
  },
  methods: {
    changeStatus (obj) {
      this.$store.commit(`status/${this.name}`, obj)
    },
    offFilePick () {
      if (this.imageOff) {
        this.imageOff = null
      } else {
        this.$refs.imageOffInput.click()
      }
    },
    offFilePicked (event) {
      const file = event.target.files[0]
      this.$refs.imageOffInput.value = null

      const fileReader = new FileReader()
      fileReader.onload = (event) => {
        this.imageOff = event.target.result
      }
      fileReader.readAsDataURL(file)
    },
    onFilePick () {
      if (this.imageOn) {
        this.imageOn = null
      } else {
        this.$refs.imageOnInput.click()
      }
    },
    onFilePicked (event) {
      const file = event.target.files[0]
      this.$refs.imageOnInput.value = null

      const fileReader = new FileReader()
      fileReader.onload = (event) => {
        this.imageOn = event.target.result
      }
      fileReader.readAsDataURL(file)
    }
  }
}
