import status from '~/components/editor/status/status.vue'
import preview from '~/components/device/preview/preview.vue'

export default {
  components: {
    status,
    preview
  },
  computed: {
    model () {
      return this.$store.state.device.model
    },
    title () {
      return this.$t('status.title')
    }
  },
  head () {
    return {
      title: `${this.model} ${this.title}`
    }
  }
}
