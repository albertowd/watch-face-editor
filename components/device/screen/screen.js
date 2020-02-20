import background from './background/background.vue'

export default {
  props: {
    example: {
      default: false,
      type: Boolean
    }
  },
  components: {
    background
  },
  computed: {
    model () {
      return this.$store.state.device.model
    },
    position () {
      const preview = this.$store.state.device.preview
      return {
        bottom: `${preview.offset.bottom * preview.zoom}px`,
        left: `${preview.offset.left * preview.zoom}px`,
        right: `${preview.offset.right * preview.zoom}px`,
        top: `${preview.offset.top * preview.zoom}px`
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
