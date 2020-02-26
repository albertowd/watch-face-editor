import timeEditor from '~/components/editor/time/time.vue'

export default {
  components: {
    timeEditor
  },
  computed: {
    model () {
      return this.$store.state.device.model
    },
    title () {
      return this.$t('time.title')
    }
  },
  head () {
    return {
      title: `${this.model} ${this.title}`
    }
  }
}
