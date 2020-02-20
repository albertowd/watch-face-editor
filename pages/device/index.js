import info from '~/components/editor/info/info.vue'
import preview from '~/components/device/preview/preview.vue'

export default {
  components: {
    info,
    preview
  },
  computed: {
    name () {
      const device = this.$store.state.device
      return `${device.vendor} ${device.model}`
    }
  },
  head () {
    return {
      title: this.name
    }
  }
}
