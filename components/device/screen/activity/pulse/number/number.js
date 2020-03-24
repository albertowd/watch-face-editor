export default {
  data () {
    return {
      pulse: null
    }
  },
  computed: {
    alignment () {
      if (this.$store.state.activity.pulse.number.alignment.startsWith('Bottom')) {
        return 'end'
      } else if (this.$store.state.activity.pulse.number.alignment.startsWith('Top')) {
        return 'start'
      } else {
        return 'center'
      }
    },
    images () {
      return this.$store.state.activity.pulse.number.images
    },
    justify () {
      if (this.$store.state.activity.pulse.number.alignment.endsWith('Left')) {
        return 'start'
      } else if (this.$store.state.activity.pulse.number.alignment.endsWith('Right')) {
        return 'end'
      } else {
        return 'center'
      }
    },
    noDataImage () {
      return this.$store.state.activity.noDataImage
    },
    position () {
      return {
        bottom: `${this.$store.state.device.size.height - this.$store.state.activity.pulse.number.bottom}px`,
        left: `${this.$store.state.activity.pulse.number.left}px`,
        right: `${this.$store.state.device.size.width - this.$store.state.activity.pulse.number.right}px`,
        top: `${this.$store.state.activity.pulse.number.top}px`
      }
    },
    spacing () {
      const spacing = this.$store.state.activity.pulse.number.spacing
      return `margin-left: ${spacing}px;margin-right: ${spacing}px;`
    }
  },
  methods: {
    circle (mult) {
      if (this.pulse !== null) {
        const next = (this.pulse + mult) % 1000
        this.pulse = this.noDataImage && next === 0 ? null : next
      } else {
        this.pulse = 0
      }
    }
  }
}
