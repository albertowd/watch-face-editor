import shortcutEditor from './shorcut/shortcut.vue'

export default {
  components: {
    shortcutEditor
  },
  computed: {
    hasPulse () {
      return this.$store.state.device.features.shortcuts.pulse
    },
    hasState () {
      return this.$store.state.device.features.shortcuts.state
    },
    hasWeather () {
      return this.$store.state.device.features.shortcuts.weather
    }
  }
}
