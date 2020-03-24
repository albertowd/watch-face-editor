export default {
  data () {
    return {
      expanded: false
    }
  },
  computed: {
    dimensions () {
      return {
        height: this.$store.state.device.size.height,
        width: this.$store.state.device.size.width
      }
    },
    image: {
      get () { return this.$store.state.battery.percent.image },
      set (image) { this.changePercent({ image }) }
    },
    tPosition () {
      return this.$t('app.position')
    },
    tPositionDescription () {
      return this.$t('app.positionDescription')
    },
    tTitle () {
      return this.$t('battery.percent.title')
    },
    tTitleDescription () {
      return this.$t('battery.percent.titleDescription')
    },
    x: {
      get () { return this.$store.state.battery.percent.x },
      set (x) { this.changePercent({ x }) }
    },
    y: {
      get () { return this.$store.state.battery.percent.y },
      set (y) { this.changePercent({ y }) }
    }
  },
  methods: {
    changePercent (obj) {
      this.$store.commit('battery/percent', obj)
    },
    pickImage () {
      if (this.image) {
        this.image = null
      } else {
        this.$refs.imageInput.click()
      }
    },
    uploadImage (event) {
      const file = event.target.files[0]
      this.$refs.imageInput.value = null

      const fileReader = new FileReader()
      fileReader.onload = (event) => {
        this.image = event.target.result
      }
      fileReader.readAsDataURL(file)
    }
  }
}
