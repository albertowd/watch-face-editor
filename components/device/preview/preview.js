import screen from '~/components/device/screen/screen.vue'

export default {
  components: {
    screen
  },
  props: {
    device: {
      default: {},
      type: Object
    }
  },
  data () {
    return {
      alias: this.device.alias,
      size: {
        height: `${this.device.preview.dimensions.height * this.device.preview.zoom}px`,
        width: `${this.device.preview.dimensions.width * this.device.preview.zoom}px`
      }
    }
  }
}
