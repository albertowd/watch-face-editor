import iconsEditor from './icons/icons.vue'
import imagesEditor from './images/images.vue'
import percentEditor from './percent/percent.vue'
import textEditor from './text/text.vue'

export default {
  components: {
    iconsEditor,
    imagesEditor,
    percentEditor,
    textEditor
  },
  computed: {
    hasAnalog () {
      return this.$store.state.device.features.battery.analog
    },
    hasIcons () {
      return this.$store.state.device.features.battery.icons
    },
    hasImages () {
      return this.$store.state.device.features.battery.images
    },
    hasPercent () {
      return this.$store.state.device.features.battery.percent
    },
    hasText () {
      return this.$store.state.device.features.battery.text
    }
  }
}
