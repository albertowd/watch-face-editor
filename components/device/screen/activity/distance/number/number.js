export default {
  data () {
    return {
      distance: 0,
      tensIndex: 0,
      onesIndex: 0,
      decimalTensIndex: 0,
      decimalOnesIndex: 0
    }
  },
  computed: {
    alignment () {
      if (this.$store.state.activity.distance.number.alignment.startsWith('Bottom')) {
        return 'end'
      } else if (this.$store.state.activity.distance.number.alignment.startsWith('Top')) {
        return 'start'
      } else {
        return 'center'
      }
    },
    decimalImage () {
      return this.$store.state.activity.distance.decimalImage
    },
    images () {
      return this.$store.state.activity.distance.number.images
    },
    kmImage () {
      return this.$store.state.activity.distance.kmImage
    },
    justify () {
      if (this.$store.state.activity.distance.number.alignment.endsWith('Left')) {
        return 'start'
      } else if (this.$store.state.activity.distance.number.alignment.endsWith('Right')) {
        return 'end'
      } else {
        return 'center'
      }
    },
    position () {
      return {
        bottom: `${this.$store.state.device.size.height - this.$store.state.activity.distance.number.bottom}px`,
        left: `${this.$store.state.activity.distance.number.left}px`,
        right: `${this.$store.state.device.size.width - this.$store.state.activity.distance.number.right}px`,
        top: `${this.$store.state.activity.distance.number.top}px`
      }
    },
    spacing () {
      const spacing = this.$store.state.activity.distance.number.spacing
      return `margin-left: ${spacing}px;margin-right: ${spacing}px;`
    }
  },
  methods: {
    circle (mult) {
      this.distance = (this.distance + mult) % 10000
      this.tensIndex = Math.floor(this.distance / 1000)
      this.onesIndex = Math.floor((this.distance % 1000) / 100)
      this.decimalTensIndex = Math.floor((this.distance % 100) / 10)
      this.decimalOnesIndex = this.distance % 10
    }
  }
}
