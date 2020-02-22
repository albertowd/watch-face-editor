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
  date (state, date) {
    for (const prop in date) {
      state[prop] = date[prop]
    }
  },
  monthAndDay (state, monthAndDay) {
    for (const prop in monthAndDay) {
      state.monthAndDay[prop] = monthAndDay[prop]
    }
  },
  weekDay (state, weekDay) {
    for (const prop in weekDay) {
      state.weekDay[prop] = weekDay[prop]
    }
  }
}
