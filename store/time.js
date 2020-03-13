export const state = () => ({
  ampm: {
    imagesAM: [],
    imagesPM: [],
    x: 292,
    y: 150
  },
  delimiter: {
    image: null,
    x: 145,
    y: 50
  },
  hours: {
    ones: {
      images: [],
      x: 84,
      y: 50
    },
    tens: {
      images: [],
      x: 8,
      y: 50
    }
  },
  minutes: {
    ones: {
      images: [],
      x: 280,
      y: 50
    },
    tens: {
      images: [],
      x: 204,
      y: 50
    }
  },
  seconds: {
    ones: {
      images: [],
      x: 232,
      y: 150
    },
    tens: {
      images: [],
      x: 156,
      y: 150
    }
  }
})

export const mutations = {
  /**
   * Updates new AM/PM options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New AM/PM options.
   */
  ampm (state, obj) {
    for (const prop in obj) {
      state.ampm[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new delimiter options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New delimiter options.
   */
  delimiter (state, obj) {
    for (const prop in obj) {
      state.delimiter[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new hour ones options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New hour ones options.
   */
  hoursOnes (state, obj) {
    for (const prop in obj) {
      state.hours.ones[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new hour tens options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New hour tens options.
   */
  hoursTens (state, obj) {
    for (const prop in obj) {
      state.hours.tens[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Imports time options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New time options.
   */
  import (state, obj) {
    this.commit('time/ampm', obj.ampm)
    this.commit('time/delimiter', obj.delimiter)
    this.commit('time/hoursOnes', obj.hours.ones)
    this.commit('time/hoursTens', obj.hours.tens)
    this.commit('time/minutesOnes', obj.minutes.ones)
    this.commit('time/minutesTens', obj.minutes.tens)
    this.commit('time/secondsOnes', obj.seconds.ones)
    this.commit('time/secondsTens', obj.seconds.tens)
  },
  /**
   * Updates new minutes ones options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New minutes ones options.
   */
  minutesOnes (state, obj) {
    for (const prop in obj) {
      state.minutes.ones[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new minute tens options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New minute tens options.
   */
  minutesTens (state, obj) {
    for (const prop in obj) {
      state.minutes.tens[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new seconds ones options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New seconds ones options.
   */
  secondsOnes (state, obj) {
    for (const prop in obj) {
      state.seconds.ones[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new seconds tens options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New seconds tens options.
   */
  secondsTens (state, obj) {
    for (const prop in obj) {
      state.seconds.tens[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  }
}
