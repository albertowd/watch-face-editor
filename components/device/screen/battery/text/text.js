export default {
  data () {
    return {
      percentage: 0
    }
  },
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
    hundredsImage () {
      return this.images[Math.floor(this.percentage / 100)]
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
    onesImage () {
      return this.images[Math.floor(this.percentage % 10)]
    },
    tensImage () {
      return this.images[Math.floor(this.percentage % 100 / 10)]
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
  },
  methods: {
    circle (mult) {
      this.percentage = (this.percentage + mult) % 101
    }
  }
}
