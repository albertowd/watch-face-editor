export const state = () => ({
  monthAndDay: {
    oneLine: {
      number: {
        alignment: 'Center Center',
        bottom: 0,
        images: [],
        left: 0,
        right: 0,
        spacing: 0,
        top: 0
      },
      delimiterImage: null
    },
    separate: {
      day: {
        align: 'Center Right',
        bottom: 0,
        images: [],
        left: 0,
        right: 0,
        spacing: 0,
        top: 0
      },
      month: {
        align: 'Center Left',
        bottom: 0,
        images: [],
        left: 0,
        right: 0,
        spacing: 0,
        top: 0
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
