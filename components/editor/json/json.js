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
    this.json = this.$store.state.json.content
  }
}
