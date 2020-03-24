import json from '~/components/editor/json/json.vue'

export default {
  components: {
    json
  },
  computed: {
    model () {
      return this.$store.state.device.model
    },
    title () {
      return this.$t('json.title')
    }
  },
  head () {
    return {
      title: `${this.model} ${this.title}`
    }
  }
}
