export const state = () => ({
  monthAndDay: {
    day: {
      align: 'TopLeft',
      bottom: 55,
      images: [],
      left: 23,
      right: 54,
      spacing: 0,
      top: 247
    },
    month: {
      align: 'TopLeft',
      bottom: 0,
      images: [],
      left: 71,
      right: 0,
      spacing: 0,
      top: 247
    },
    twoDigitsMonth: true,
    twoDigitsDay: true
  },
  weekDay: {
    images: [],
    x: 35,
    y: 170
  }
})

export const mutations = {
  /**
   * Imports date options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New date options.
   */
  import (state, obj) {
    this.commit('date/weekDay', obj.weekDay)
    // this.commit('date/monthAndDay', obj.monthAndDay)
  },
  /**
   * Updates new month and day options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} weekDay New month and day options.
   */
  monthAndDay (state, monthAndDay) {
    // TODO: implement the monthAnDay updater!
    this.commit('json/changed', true)
  },
  /**
   * Updates new week day options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} weekDay New week day options.
   */
  weekDay (state, weekDay) {
    for (const prop in weekDay) {
      state.weekDay[prop] = weekDay[prop]
    }
    this.commit('json/changed', true)
  }
}
