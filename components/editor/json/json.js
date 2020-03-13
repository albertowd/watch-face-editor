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
    onChange (json) {
      this.error = ''
      try {
        JSON.parse(json)
      } catch (error) {
        this.error = JSON.stringify(error.message)
      }
    }
  },
  mounted () {
    const device = this.$packDevice(this.$store.state)
    const obj = this.$converters[this.$store.state.device.alias].export(device, this.$store.state.device.features)
    delete obj.images
    this.json = JSON.stringify(obj, null, 4)
  }
}
