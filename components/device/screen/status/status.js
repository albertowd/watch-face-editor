export default {
  props: {
    name: {
      default: 'alarm',
      type: String
    }
  },
  computed: {
    imageOff () {
      this.on = (this.$store.state.status[this.name].imageOff === null)
      return this.$store.state.status[this.name].imageOff
    },
    imageOn () {
      this.on = (this.$store.state.status[this.name].imageOn !== null)
      return this.$store.state.status[this.name].imageOn
    },
    position () {
      return {
        left: `${this.$store.state.status[this.name].x}px`,
        top: `${this.$store.state.status[this.name].y}px`
      }
    }
  },
  data () {
    return {
      on: true
    }
  },
  methods: {
    toggle () {
      this.on = !this.on
    }
  }
}
