export default {
  data () {
    return {
      steps: null
    }
  },
  computed: {
    alignment () {
      if (this.$store.state.activity.steps.number.alignment.startsWith('Bottom')) {
        return 'end'
      } else if (this.$store.state.activity.steps.number.alignment.startsWith('Top')) {
        return 'start'
      } else {
        return 'center'
      }
    },
    images () {
      return this.$store.state.activity.steps.number.images
    },
    justify () {
      if (this.$store.state.activity.steps.number.alignment.endsWith('Left')) {
        return 'start'
      } else if (this.$store.state.activity.steps.number.alignment.endsWith('Right')) {
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
        bottom: `${this.$store.state.device.size.height - this.$store.state.activity.steps.number.bottom}px`,
        left: `${this.$store.state.activity.steps.number.left}px`,
        right: `${this.$store.state.device.size.width - this.$store.state.activity.steps.number.right}px`,
        top: `${this.$store.state.activity.steps.number.top}px`
      }
    },
    spacing () {
      const spacing = this.$store.state.activity.steps.number.spacing
      return `margin-left: ${spacing}px;margin-right: ${spacing}px;`
    }
  },
  methods: {
    circle (mult) {
      if (this.steps !== null) {
        const next = (this.steps + mult) % 100000
        this.steps = this.noDataImage && next === 0 ? null : next
      } else {
        this.steps = 0
      }
    }
  }
}
