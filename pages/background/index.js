import background from '~/components/editor/background/background.vue'
import preview from '~/components/device/preview/preview.vue'

export default {
  components: {
    background,
    preview
  },
  computed: {
    model () {
      return this.$store.state.device.model
    },
    title () {
      return this.$t('background.title')
    }
  },
  head () {
    return {
      title: `${this.model} ${this.title}`
    }
  }
}
