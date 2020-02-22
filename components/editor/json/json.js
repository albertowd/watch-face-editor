export default {
  data () {
    return {
      error: '',
      json: '{}'
    }
  },
  computed: {
    tTitle () {
      return this.$t('json.title')
    }
  },
  methods: {
    getDevice () {
      return {
        activity: this.$vuexToObj(this.$store.state.activity),
        animation: this.$vuexToObj(this.$store.state.animation),
        background: this.$vuexToObj(this.$store.state.background),
        battery: this.$vuexToObj(this.$store.state.battery),
        clock: this.$vuexToObj(this.$store.state.clock),
        date: this.$vuexToObj(this.$store.state.date),
        status: this.$vuexToObj(this.$store.state.status),
        time: this.$vuexToObj(this.$store.state.time),
        weather: this.$vuexToObj(this.$store.state.weather)
      }
    },
    onChange (json) {
      this.error = ''
      try {
        const obj = JSON.parse(json)
        this.$store.commit('json/json', { content: JSON.stringify(obj, null, 4) })
      } catch (error) {
        this.error = JSON.stringify(error.message)
      }
    }
  },
  mounted () {
    const obj = this.$converter.fromDevice(this.getDevice())
    delete obj.images
    const json = JSON.stringify(obj, null, 4)

    if (this.json !== json) {
      this.$store.commit('json/json', { content: json })
    }
    this.json = json
  }
}
