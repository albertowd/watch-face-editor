export const state = () => ({
  monthAndDay: {
    oneLine: {
      number: {
        alignment: 'Center Center',
        bottom: 92,
        images: [],
        left: 15,
        right: 248,
        spacing: 0,
        top: 300
      },
      delimiterImage: null
    },
    separate: {
      day: {
        alignment: 'Center Center',
        bottom: 197,
        images: [],
        left: 0,
        right: 300,
        spacing: 0,
        top: 200
      },
      month: {
        alignment: 'Center Center',
        bottom: 197,
        images: [],
        left: 270,
        right: 142,
        spacing: 0,
        top: 200
      },
      monthName: {
        images: [],
        x: 15,
        y: 250
      }
    },
    twoDigitsMonth: true,
    twoDigitsDay: true
  },
  weekDay: {
    images: [],
    x: 15,
    y: 180
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
    this.commit('date/monthAndDayDay', obj.monthAndDay.separate.day)
    this.commit('date/monthAndDayMonth', obj.monthAndDay.separate.month)
    this.commit('date/monthAndDayMonthName', obj.monthAndDay.separate.monthName)
    this.commit('date/monthAndDayOneLine', obj.monthAndDay.oneLine)
  },
  /**
   * Updates new day options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New day options.
   */
  monthAndDayDay (state, obj) {
    for (const prop in obj) {
      state.monthAndDay.separate.day[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new month options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New month options.
   */
  monthAndDayMonth (state, obj) {
    for (const prop in obj) {
      state.monthAndDay.separate.month[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new month name options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New month name options.
   */
  monthAndDayMonthName (state, obj) {
    for (const prop in obj) {
      state.monthAndDay.separate.monthName[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new month and day options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New month and day options.
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
   * @param {object} obj New month and day options.
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
   * @param {object} obj New week day options.
   */
  weekDay (state, obj) {
    for (const prop in obj) {
      state.weekDay[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  }
}
