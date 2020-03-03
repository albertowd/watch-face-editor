import shortcutEditor from './shorcut/shortcut.vue'

export default {
  components: {
    shortcutEditor
  },
  computed: {
    hasEnergy () {
      return this.$store.state.device.features.shortcuts.energy
    },
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
