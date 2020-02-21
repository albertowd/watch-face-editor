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
    position () {
      const device = this.$store.state.device
      const preview = this.$store.state.device.preview
      return {
        bottom: `${(preview.size.height - preview.screen.y - device.size.height) * preview.zoom}px`,
        left: `${preview.screen.x * preview.zoom}px`,
        right: `${(preview.size.width - preview.screen.x - device.size.width) * preview.zoom}px`,
        top: `${preview.screen.y * preview.zoom}px`
      }
    },
    relativePosition () {
      const device = this.$store.state.device
      const preview = this.$store.state.device.preview
      return {
        height: `${device.size.height}px`,
        left: `-${(device.size.width * preview.zoom) / 2}px`,
        top: `-${(device.size.height * preview.zoom) / 2}px`,
        transform: `scale(${preview.zoom})`,
        width: `${device.size.width}px`
      }
    },
    size () {
      const preview = this.$store.state.device.preview
      return {
        height: `${preview.size.height * preview.zoom}px`,
        width: `${preview.size.width * preview.zoom}px`
      }
    }
  }
}
