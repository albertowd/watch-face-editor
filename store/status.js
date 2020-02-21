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
  changeAlarmImageOn (state, image) {
    state.alarm.imageOn = image
  },
  changeAlarmImageOff (state, image) {
    state.alarm.imageOff = image
  },
  changeAlarmX (state, x) {
    state.alarm.x = x
  },
  changeAlarmY (state, y) {
    state.alarm.y = y
  },
  changeBluetoothImageOn (state, image) {
    state.bluetooth.imageOn = image
  },
  changeBluetoothImageOff (state, image) {
    state.bluetooth.imageOff = image
  },
  changeBluetoothX (state, x) {
    state.bluetooth.x = x
  },
  changeBluetoothY (state, y) {
    state.bluetooth.y = y
  },
  changeDndImageOn (state, image) {
    state.dnd.imageOn = image
  },
  changeDndImageOff (state, image) {
    state.dnd.imageOff = image
  },
  changeDndX (state, x) {
    state.dnd.x = x
  },
  changeDndY (state, y) {
    state.dnd.y = y
  },
  changeLockImageOn (state, image) {
    state.lock.imageOn = image
  },
  changeLockImageOff (state, image) {
    state.lock.imageOff = image
  },
  changeLockX (state, x) {
    state.lock.x = x
  },
  changeLockY (state, y) {
    state.lock.y = y
  },
  toggleAllarm (state, allowed) {
    if (undefined !== allowed) {
      state.alarm.allowed = allowed
    } else {
      state.alarm.allowed = !state.alarm.allowed
    }
  },
  toggleBluetooth (state, allowed) {
    if (undefined !== allowed) {
      state.bluetooth.allowed = allowed
    } else {
      state.bluetooth.allowed = !state.bluetooth.allowed
    }
  },
  toggleDnd (state, allowed) {
    if (undefined !== allowed) {
      state.dnd.allowed = allowed
    } else {
      state.dnd.allowed = !state.dnd.allowed
    }
  },
  toggleLock (state, allowed) {
    if (undefined !== allowed) {
      state.lock.allowed = allowed
    } else {
      state.lock.allowed = !state.lock.allowed
    }
  }
}
