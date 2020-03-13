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
  },
  weekDayProgress: {
    coords: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
      [6, 6]
    ],
    images: []
  },
  year: {
    oneLine: {
      number: {
        alignment: 'Center Center',
        bottom: 92,
        images: [],
        left: 15,
        right: 248,
        spacing: 0,
        top: 300
      }
    }
  }
})

export const mutations = {
  /**
   * Imports date options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New date options.
   */
  import (state, obj) {
    this.commit('date/monthAndDay', obj.monthAndDay)
    this.commit('date/weekDay', obj.weekDay)
    this.commit('date/weekDayProgress', obj.weekDayProgress)
    this.commit('date/year', obj.year.oneLine)
  },
  /**
   * Updates new month and day options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New month and day options.
   */
  monthAndDay (state, obj) {
    for (const prop in obj) {
      if (['twoDigitsDay', 'twoDigitsMonth'].includes(prop)) {
        state.monthAndDay[prop] = obj[prop]
      }
    }
    if (obj.separate) {
      this.commit('date/monthAndDayDay', obj.separate.day)
      this.commit('date/monthAndDayMonth', obj.separate.month)
      this.commit('date/monthAndDayMonthName', obj.separate.monthName)
    }
    if (obj.oneLine) {
      this.commit('date/monthAndDayOneLine', obj.oneLine)
    }
    this.commit('json/changed', true)
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
  },
  /**
   * Updates new week day progress options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New week day progress options.
   */
  weekDayProgress (state, obj) {
    for (const prop in obj) {
      state.weekDayProgress[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new year options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New year options.
   */
  year (state, obj) {
    this.commit('json/yearOneLineNumber', obj.oneLine)
  },
  /**
   * Updates new one line year options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New one line year options.
   */
  yearOneLineNumber (state, obj) {
    for (const prop in obj) {
      state.year.oneLine.number[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  }
}
