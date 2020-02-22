export const state = () => ({
  alarm: {
    allowed: true,
    imageOn: null,
    imageOff: null,
    x: 0,
    y: 0
  },
  bluetooth: {
    allowed: true,
    imageOn: null,
    imageOff: null,
    x: 50,
    y: 0
  },
  dnd: {
    allowed: true,
    imageOn: null,
    imageOff: null,
    x: 100,
    y: 0
  },
  lock: {
    allowed: true,
    imageOn: null,
    imageOff: null,
    x: 150,
    y: 0
  }
})

export const mutations = {
  alarm (state, alarm) {
    for (const prop in alarm) {
      state.alarm[prop] = alarm[prop]
    }
  },
  bluetooth (state, bluetooth) {
    for (const prop in bluetooth) {
      state.bluetooth[prop] = bluetooth[prop]
    }
  },
  dnd (state, dnd) {
    for (const prop in dnd) {
      state.dnd[prop] = dnd[prop]
    }
  },
  lock (state, lock) {
    for (const prop in lock) {
      state.lock[prop] = lock[prop]
    }
  },
  status (state, status) {
    for (const prop in status) {
      state[prop] = status[prop]
    }
  }
}
