export default {
  props: {
    initial: {
      default: 0,
      type: Number
    },
    max: {
      default: 9,
      type: Number
    },
    name: {
      default: 'hours',
      type: String
    },
    sub: {
      default: 'tens',
      type: String
    }
  },
  data () {
    return {
      index: this.initial
    }
  },
  computed: {
    image () {
      return this.$store.state.time[this.name][this.sub].images[this.index]
    },
    position () {
      return {
        left: `${this.$store.state.time[this.name][this.sub].x}px`,
        top: `${this.$store.state.time[this.name][this.sub].y}px`
      }
    }
  },
  methods: {
    toggle () {
      this.index = (this.index + 1) % this.max
    }
  }
}
