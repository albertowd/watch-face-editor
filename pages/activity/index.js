import activityEditor from '~/components/editor/activity/activity.vue'

export default {
  components: {
    activityEditor
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
