import imageEditor from './image/image.vue'

export default {
  components: {
    imageEditor
  },
  computed: {
    hasBackground () {
      return this.$store.state.device.features.background.background
    },
    hasPreview () {
      return this.$store.state.device.features.background.preview
    }
  }
}
