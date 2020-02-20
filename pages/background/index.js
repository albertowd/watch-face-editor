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
    }
  },
  head () {
    return {
      title: `${this.model} Background`
    }
  }
}
