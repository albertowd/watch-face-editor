export default {
  props: {
    name: {
      default: 'background',
      type: String
    }
  },
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
      get () { return this.$store.state.background[this.name].image },
      set (image) { this.changeBackground({ image }) }
    },
    tPosition () {
      return this.$t('app.position')
    },
    tPositionDescription () {
      return this.$t('app.positionDescription')
    },
    tTitle () {
      return this.$t(`background.${this.name}.title`)
    },
    tTitleDescription () {
      return this.$t(`background.${this.name}.titleDescription`)
    },
    x: {
      get () { return this.$store.state.background[this.name].x },
      set (x) { this.changeBackground({ x }) }
    },
    y: {
      get () { return this.$store.state.background[this.name].y },
      set (y) { this.changeBackground({ y }) }
    }
  },
  methods: {
    changeBackground (obj) {
      this.$store.commit(`background/${this.name}`, obj)
    },
    pickImage () {
      if (this.image) {
        this.changeBackground({ image: null })
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
