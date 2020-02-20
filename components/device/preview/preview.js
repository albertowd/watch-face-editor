import screen from '~/components/device/screen/screen.vue'

export default {
  components: {
    screen
  },
  props: {
    example: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    model () {
      return this.$store.state.device.model
    },
    size () {
      const preview = this.$store.state.device.preview
      return {
        height: `${preview.dimensions.height}px`,
        transform: `scale(${preview.zoom})`,
        width: `${preview.dimensions.width}px`
      }
    }
  }
}
