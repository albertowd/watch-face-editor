export default {
  computed: {
    alignment () {
      if (this.$store.state.battery.text.alignment.startsWith('Bottom')) {
        return 'end'
      } else if (this.$store.state.battery.text.alignment.startsWith('Top')) {
        return 'start'
      } else {
        return 'center'
      }
    },
    images () {
      return this.$store.state.battery.text.images
    },
    justify () {
      if (this.$store.state.battery.text.alignment.endsWith('Left')) {
        return 'start'
      } else if (this.$store.state.battery.text.alignment.endsWith('Right')) {
        return 'end'
      } else {
        return 'center'
      }
    },
    position () {
      return {
        bottom: `${this.$store.state.device.size.height - this.$store.state.battery.text.bottom}px`,
        left: `${this.$store.state.battery.text.left}px`,
        right: `${this.$store.state.device.size.width - this.$store.state.battery.text.right}px`,
        top: `${this.$store.state.battery.text.top}px`
      }
    },
    spacing () {
      const spacing = this.$store.state.battery.text.spacing
      return `margin-left: ${spacing}px;margin-right: ${spacing}px;`
    }
  }
}
