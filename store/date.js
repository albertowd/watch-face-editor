export const state = () => ({
  monthAndDay: {
    oneLine: {
      number: {
        align: 'TopLeft',
        bottom: 0,
        images: [],
        left: 71,
        right: 0,
        spacing: 0,
        top: 247
      },
      delimiterImage: null
    },
    separate: {
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
    }
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
    this.commit('date/monthAndDayOneLine', obj.monthAndDay.oneLine)
  },
  /**
   * Updates new month and day options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} weekDay New month and day options.
   */
  monthAndDayOneLine (state, obj) {
    for (const prop in obj) {
      if (prop === 'number') {
        this.commit('date/monthAndDayOneLineNumber', obj[prop])
      } else {
        state.monthAndDay.oneLine[prop] = obj[prop]
      }
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new month and day options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} weekDay New month and day options.
   */
  monthAndDayOneLineNumber (state, obj) {
    for (const prop in obj) {
      state.monthAndDay.oneLine.number[prop] = obj[prop]
    }
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
