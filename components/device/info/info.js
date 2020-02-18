export default {
  props: {
    device: {
      default: {},
      type: Object
    }
  },
  data () {
    return {
      limit: this.device.packLimit,
      name: this.device.name,
      size: `${this.device.dimensions.width} x ${this.device.dimensions.height} pixels`
    }
  }
}
