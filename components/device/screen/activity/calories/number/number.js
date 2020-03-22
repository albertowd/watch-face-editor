export default {
  data () {
    return {
      calories: null
    }
  },
  computed: {
    alignment () {
      if (this.$store.state.activity.calories.number.alignment.startsWith('Bottom')) {
        return 'end'
      } else if (this.$store.state.activity.calories.number.alignment.startsWith('Top')) {
        return 'start'
      } else {
        return 'center'
      }
    },
    images () {
      return this.$store.state.activity.calories.number.images
    },
    justify () {
      if (this.$store.state.activity.calories.number.alignment.endsWith('Left')) {
        return 'start'
      } else if (this.$store.state.activity.calories.number.alignment.endsWith('Right')) {
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
        bottom: `${this.$store.state.device.size.height - this.$store.state.activity.calories.number.bottom}px`,
        left: `${this.$store.state.activity.calories.number.left}px`,
        right: `${this.$store.state.device.size.width - this.$store.state.activity.calories.number.right}px`,
        top: `${this.$store.state.activity.calories.number.top}px`
      }
    },
    spacing () {
      const spacing = this.$store.state.activity.calories.number.spacing
      return `margin-left: ${spacing}px;margin-right: ${spacing}px;`
    }
  },
  methods: {
    circle (mult) {
      if (this.calories !== null) {
        const next = (this.calories + mult) % 10000
        this.calories = this.noDataImage && next === 0 ? null : next
      } else {
        this.calories = 0
      }
    }
  }
}
