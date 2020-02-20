import positionedImage from './positioned-image/positioned-image.vue'

export default {
  props: {
    example: {
      default: false,
      type: Boolean
    }
  },
  components: {
    positionedImage
  },
  computed: {
    model () {
      return this.$store.state.device.model
    },
    position () {
      const preview = this.$store.state.device.preview
      return {
        bottom: `${preview.offset.bottom}px`,
        left: `${preview.offset.left}px`,
        right: `${preview.offset.right}px`,
        top: `${preview.offset.top}px`
      }
    }
  },
  data () {
    return {
      showExample: this.example
    }
  },
  methods: {
    toggleExample () {
      this.showExample = !this.showExample
    }
  }
}
