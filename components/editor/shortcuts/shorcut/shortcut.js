export default {
  props: {
    name: {
      default: 'pulse',
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
    enabled: {
      get () { return this.$store.state.shortcuts[this.name].enabled },
      set (enabled) { this.$store.commit(`shortcuts/${this.name}`, { enabled }) }
    },
    position () {
      return {
        x: this.$store.state.shortcuts[this.name].x,
        y: this.$store.state.shortcuts[this.name].y
      }
    },
    size () {
      return {
        height: this.$store.state.shortcuts[this.name].height,
        width: this.$store.state.shortcuts[this.name].width
      }
    },
    tHeight () {
      return this.$t('app.height')
    },
    tPosition () {
      return this.$t('app.position')
    },
    tSize () {
      return this.$t('app.size')
    },
    tTitle () {
      return this.$t(`shortcuts.${this.name}`)
    },
    tWidth () {
      return this.$t('app.width')
    }
  },
  methods: {
    changeHeight (height) {
      this.$store.commit(`shortcuts/${this.name}`, { height })
    },
    changeWidth (width) {
      this.$store.commit(`shortcuts/${this.name}`, { width })
    },
    changeX (x) {
      this.$store.commit(`shortcuts/${this.name}`, { x })
    },
    changeY (y) {
      this.$store.commit(`shortcuts/${this.name}`, { y })
    }
  }
}
