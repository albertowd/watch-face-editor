import animationEditor from '~/components/editor/animation/animation.vue'

export default {
  components: {
    animationEditor
  },
  computed: {
    model () {
      return this.$store.state.device.model
    },
    title () {
      return this.$t('animation.title')
    }
  },
  head () {
    return {
      title: `${this.model} ${this.title}`
    }
  }
}
