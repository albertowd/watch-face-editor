import screen from '~/components/device/screen/screen.vue'

export default {
  components: {
    screen
  },
  computed: {
    alias () {
      return this.$store.state.device.alias
    },
    showExample () {
      return this.$store.state.json.example
    },
    position () {
      const device = this.$store.state.device
      const preview = device.preview
      return {
        bottom: `${(preview.size.height - preview.screen.y - device.size.height) * preview.zoom}px`,
        left: `${preview.screen.x * preview.zoom}px`,
        right: `${(preview.size.width - preview.screen.x - device.size.width) * preview.zoom}px`,
        top: `${preview.screen.y * preview.zoom}px`
      }
    },
    relativePosition () {
      const device = this.$store.state.device
      const preview = device.preview

      const pos = {
        height: `${device.size.height}px`,
        width: `${device.size.width}px`
      }

      if (preview.zoom !== 1.0) {
        pos.left = `${(preview.zoom < 1 ? -1 : 1) * (device.size.width * (preview.zoom * preview.zoom))}px`
        pos.top = `${(preview.zoom < 1 ? -1 : 1) * (device.size.height * (preview.zoom * preview.zoom))}px`
        pos.transform = `scale(${preview.zoom})`
      }

      return pos
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
