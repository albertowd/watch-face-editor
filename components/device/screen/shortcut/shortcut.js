export default {
  props: {
    name: {
      default: 'pulse',
      type: String
    }
  },
  computed: {
    enabled () {
      return this.$store.state.shortcut[this.name].enabled
    },
    style () {
      const color = this.name === 'pulse' ? 'green' : (this.name === 'state' ? 'blue' : 'red')
      return {
        border: `3px dashed ${color}`,
        bottom: `${this.$store.state.device.size.height - this.$store.state.shortcut[this.name].y - this.$store.state.shortcut[this.name].height}px`,
        left: `${this.$store.state.shortcut[this.name].x}px`,
        right: `${this.$store.state.device.size.width - this.$store.state.shortcut[this.name].x - this.$store.state.shortcut[this.name].width}px`,
        top: `${this.$store.state.shortcut[this.name].y}px`
      }
    }
  },
  data () {
    return {
      snackbar: false
    }
  }
}
