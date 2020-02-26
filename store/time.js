export const state = () => ({
  hours: {
    ones: {
      images: [],
      x: 99,
      y: 50
    },
    tens: {
      images: [],
      x: 13,
      y: 50
    }
  },
  minutes: {
    ones: {
      images: [],
      x: 271,
      y: 50
    },
    tens: {
      images: [],
      x: 185,
      y: 50
    }
  }
})

export const mutations = {
  hoursOnes (state, ones) {
    for (const prop in ones) {
      state.hours.ones[prop] = ones[prop]
    }
  },
  hoursTens (state, tens) {
    for (const prop in tens) {
      state.hours.tens[prop] = tens[prop]
    }
  },
  minutesOnes (state, ones) {
    for (const prop in ones) {
      state.minutes.ones[prop] = ones[prop]
    }
  },
  minutesTens (state, tens) {
    for (const prop in tens) {
      state.minutes.tens[prop] = tens[prop]
    }
  },
  import (state, obj) {
    // TODO: make import function
  }
}
