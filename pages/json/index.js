import json from '~/components/editor/json/json.vue'
import preview from '~/components/device/preview/preview.vue'

export default {
  components: {
    json,
    preview
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
