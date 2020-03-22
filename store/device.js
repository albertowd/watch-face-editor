export const state = () => ({
  alias: '',
  features: {
    activity: {
      calories: {
        graph: false,
        number: false
      },
      distance: {
        number: true
      },
      noDataImage: false,
      pulse: {
        graph: false,
        images: false,
        meter: false,
        number: false
      },
      setps: {
        goal: false,
        image: false,
        number: false
      }
    },
    animation: {
      motion: false,
      static: false
    },
    background: {
      image: false,
      preview: false
    },
    battery: {
      analog: false,
      icons: false,
      images: false,
      percent: false,
      text: false
    },
    date: {
      monthAndDay: {
        oneLine: false,
        separate: {
          day: false,
          month: false,
          monthName: false
        }
      },
      weekDay: false,
      weekDayProgress: false,
      year: {
        oneLine: false
      }
    },
    shortcut: {
      energy: false,
      pulse: false,
      state: false,
      weather: false
    },
    status: {
      alarm: false,
      bluetooth: false,
      dnd: false,
      lock: false
    },
    time: {
      ampm: false,
      delimiter: false,
      hours: false,
      minutes: false,
      seconds: false
    }
  },
  model: 'Unknown',
  packLimit: 1536,
  preview: {
    screen: {
      x: 62,
      y: 223
    },
    size: {
      height: 888,
      width: 502
    },
    zoom: 0.5
  },
  size: {
    height: 442,
    width: 348
  },
  vendor: ''
})

export const mutations = {
  device (state, device) {
    for (const prop in device) {
      state[prop] = device[prop]
    }
  },
  previewZoom (state, newValue) {
    state.preview.zoom = newValue
  }
}
