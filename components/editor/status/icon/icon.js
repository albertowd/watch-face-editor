export default {
  props: {
    name: {
      default: 'alarm',
      type: String
    }
  },
  computed: {
    imageOff () {
      return this.$store.state.status[this.name].imageOff !== null
    },
    imageOn () {
      return this.$store.state.status[this.name].imageOn !== null
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
    subName () {
      return this.name ? this.name[0].toUpperCase() + this.name.slice(1) : ''
    },
    tClear () {
      return this.$t(`status.${this.name}.clear`)
    },
    tPosition () {
      return this.$t(`status.${this.name}.position`)
    },
    tTitle () {
      return this.$t(`status.${this.name}.title`)
    }
  },
  methods: {
    offFilePick () {
      if (this.imageOff) {
        this.$store.commit(`status/change${this.subName}ImageOff`, null)
        this.$refs.imageOffInput.value = null
      } else {
        this.$refs.imageOffInput.click()
      }
    },
    offFilePicked (event) {
      const file = event.target.files[0]

      const fileReader = new FileReader()
      fileReader.addEventListener('load', (event) => {
        this.$store.commit(`status/change${this.subName}ImageOff`, event.target.result)
      })
      fileReader.readAsDataURL(file)
    },
    onFilePick () {
      if (this.imageOn) {
        this.$store.commit(`status/change${this.subName}ImageOn`, null)
        this.$refs.imageOnInput.value = null
      } else {
        this.$refs.imageOnInput.click()
      }
    },
    onFilePicked (event) {
      const file = event.target.files[0]

      const fileReader = new FileReader()
      fileReader.addEventListener('load', (event) => {
        this.$store.commit(`status/change${this.subName}ImageOn`, event.target.result)
      })
      fileReader.readAsDataURL(file)
    },
    onXChange (x) {
      this.$store.commit(`status/change${this.subName}X`, x)
    },
    onYChange (y) {
      this.$store.commit(`status/change${this.subName}Y`, y)
    }
  }
}
