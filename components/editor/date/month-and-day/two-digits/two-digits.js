export default {
  computed: {
    tTwoDigitsDay () {
      return this.$t('date.monthAndDay.twoDigitsDay')
    },
    tTwoDigitsMonth () {
      return this.$t('date.monthAndDay.twoDigitsMonth')
    },
    twoDigitsDay: {
      get () { return this.$store.state.date.monthAndDay.twoDigitsDay },
      set (twoDigitsDay) { this.$store.commit('date/monthAndDay', { twoDigitsDay }) }
    },
    twoDigitsMonth: {
      get () { return this.$store.state.date.monthAndDay.twoDigitsMonth },
      set (twoDigitsMonth) { this.$store.commit('date/monthAndDay', { twoDigitsMonth }) }
    }
  }
}
