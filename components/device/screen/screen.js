export default {
  props: {
    device: {
      default: {},
      type: Object
    },
    example: {
      default: true,
      type: Boolean
    }
  },
  data () {
    return {
      alias: this.device.alias,
      position: {
        bottom: `${this.device.preview.offset.bottom * this.device.preview.zoom}px`,
        left: `${this.device.preview.offset.left * this.device.preview.zoom}px`,
        right: `${this.device.preview.offset.right * this.device.preview.zoom}px`,
        top: `${this.device.preview.offset.top * this.device.preview.zoom}px`
      },
      showExample: this.example
    }
  },
  methods: {
    toggleExample () {
      this.showExample = !this.showExample
    }
  }
}
