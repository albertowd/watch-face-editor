export default {
  props: {
    name: {
      default: 'pulse',
      type: String
    }
  },
  computed: {
    color () {
      return this.name === 'pulse' ? '#ff5252' : (this.name === 'state' ? '#4caf50' : '#2196f3')
    },
    enabled () {
      return this.$store.state.shortcuts[this.name].enabled
    },
    style () {
      return {
        border: `3px dashed ${this.color}`,
        bottom: `${this.$store.state.device.size.height - this.$store.state.shortcuts[this.name].y - this.$store.state.shortcuts[this.name].height}px`,
        left: `${this.$store.state.shortcuts[this.name].x}px`,
        right: `${this.$store.state.device.size.width - this.$store.state.shortcuts[this.name].x - this.$store.state.shortcuts[this.name].width}px`,
        top: `${this.$store.state.shortcuts[this.name].y}px`
      }
    },
    tName () {
      return this.$t(`shortcuts.${this.name}`)
    }
  },
  data () {
    return {
      snackbar: false
    }
  }
}
