export default {
  data () {
    return {
      error: '',
      json: ''
    }
  },
  computed: {
    tTitle () {
      return this.$t('json.title')
    }
  },
  methods: {
    onChange (json) {
      this.error = ''
      try {
        const jsonObj = JSON.parse(json)
        this.json = JSON.stringify(jsonObj, null, 2)
        this.$store.commit('json/changeContent', this.json)
      } catch (error) {
        this.error = JSON.stringify(error.message)
      }
    }
  },
  mounted () {
    const device = {
      activity: this.$store.state.activity,
      animation: this.$store.state.animation,
      background: this.$store.state.background,
      battery: this.$store.state.battery,
      clock: this.$store.state.clock,
      date: this.$store.state.date,
      status: this.$store.state.status,
      time: this.$store.state.time,
      weather: this.$store.state.weather
    }
    const obj = this.$converter.fromDevice(device)
    this.json = JSON.stringify(obj, null, 2)
  }
}
