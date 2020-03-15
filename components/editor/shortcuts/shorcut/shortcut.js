export default {
  props: {
    name: {
      default: 'pulse',
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
    enabled: {
      get () { return this.$store.state.shortcuts[this.name].enabled },
      set (enabled) { this.$store.commit(`shortcuts/${this.name}`, { enabled }) }
    },
    height: {
      get () { return this.$store.state.shortcuts[this.name].height },
      set (height) { this.$store.commit(`shortcuts/${this.name}`, { height }) }
    },
    tHeight () {
      return this.$t('app.height')
    },
    tPosition () {
      return this.$t('app.position')
    },
    tPositionDescription () {
      return this.$t('app.positionDescription')
    },
    tSize () {
      return this.$t('app.size')
    },
    tSizeDescription () {
      return this.$t('app.sizeDescription')
    },
    tTitle () {
      return this.$t(`shortcuts.${this.name}`)
    },
    tTitleDescription () {
      return this.$t(`shortcuts.${this.name}Description`)
    },
    tWidth () {
      return this.$t('app.width')
    },
    width: {
      get () { return this.$store.state.shortcuts[this.name].width },
      set (width) { this.$store.commit(`shortcuts/${this.name}`, { width }) }
    },
    x: {
      get () { return this.$store.state.shortcuts[this.name].x },
      set (x) { this.$store.commit(`shortcuts/${this.name}`, { x }) }
    },
    y: {
      get () { return this.$store.state.shortcuts[this.name].y },
      set (y) { this.$store.commit(`shortcuts/${this.name}`, { y }) }
    }
  }
}
