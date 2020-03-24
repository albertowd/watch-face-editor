import batteryEditor from '~/components/editor/battery/battery.vue'

export default {
  components: {
    batteryEditor
  },
  computed: {
    model () {
      return this.$store.state.device.model
    },
    title () {
      return this.$t('battery.title')
    }
  },
  head () {
    return {
      title: `${this.model} ${this.title}`
    }
  }
}
