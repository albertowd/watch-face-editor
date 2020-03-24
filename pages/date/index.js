import dateEditor from '~/components/editor/date/date.vue'

export default {
  components: {
    dateEditor
  },
  computed: {
    model () {
      return this.$store.state.device.model
    },
    title () {
      return this.$t('date.title')
    }
  },
  head () {
    return {
      title: `${this.model} ${this.title}`
    }
  }
}
