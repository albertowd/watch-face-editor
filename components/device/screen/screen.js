import background from './background/background.vue'
import status from './status/status.vue'

export default {
  components: {
    background,
    status
  },
  computed: {
    model () {
      return this.$store.state.device.model
    },
    size () {
      const device = this.$store.state.device
      return {
        height: `${device.size.height}px`,
        width: `${device.size.width}px`
      }
    }
  }
}
