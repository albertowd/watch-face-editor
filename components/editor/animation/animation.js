import staticEditor from './static/static.vue'

export default {
  components: {
    staticEditor
  },
  computed: {
    hasMotionAnimation () {
      return this.$store.state.device.features.animation.motion
    },
    hasStaticAnimation () {
      return this.$store.state.device.features.animation.static
    }
  }
}
