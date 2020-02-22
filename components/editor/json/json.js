export default {
  data () {
    return {
      error: '',
      json: '{}'
    }
  },
  computed: {
    example () {
      const example = this.$store.state.json.example
      if (!example) {
        let obj = this.$vuexToObj({
          activity: this.$store.state.activity,
          animation: this.$store.state.animation,
          background: this.$store.state.background,
          battery: this.$store.state.battery,
          clock: this.$store.state.clock,
          date: this.$store.state.date,
          status: this.$store.state.status,
          time: this.$store.state.time,
          weather: this.$store.state.weather
        })

        obj = this.$converter.fromDevice(obj, this.$store.state.device.features)
        delete obj.images
        this.json = JSON.stringify(obj, null, 4)
        this.$store.commit('json/json', { content: this.json, example: false })
      }
      return example
    },
    tTitle () {
      return this.$t('json.title')
    }
  },
  methods: {
    onChange (json) {
      this.error = ''
      try {
        JSON.parse(json)
        // this.$store.commit('json/json', { content: JSON.stringify(obj, null, 4) })
      } catch (error) {
        this.error = JSON.stringify(error.message)
      }
    }
  }
}
