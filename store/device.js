export const state = () => ({
  alias: '',
  features: {
    background: false,
    date: {
      monthAndDay: {
        oneLine: true,
        separate: true
      },
      weekDay: false
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
