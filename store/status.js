export const state = () => ({
  allowed: true,
  alarm: {
    enabled: false,
    image: null,
    x: 50,
    y: 0
  },
  bluetooth: {
    enabled: false,
    image: null,
    x: 100,
    y: 0
  },
  dnd: {
    enabled: false,
    image: null,
    x: 150,
    y: 0
  },
  lock: {
    enabled: false,
    image: null,
    x: 200,
    y: 0
  }
})

export const mutations = {
  changeAlarmImage (state, image) {
    state.alarm.image = image
    state.alarm.enabled = true
  },
  changeAlarmX (state, x) {
    state.alarm.x = x
  },
  changeAlarmY (state, y) {
    state.alarm.y = y
  },
  changeBluetoothImage (state, image) {
    state.bluetooth.image = image
    state.bluetooth.enabled = true
  },
  changeBluetoothX (state, x) {
    state.bluetooth.x = x
  },
  changeBluetoothY (state, y) {
    state.bluetooth.y = y
  },
  changeDndImage (state, image) {
    state.dnd.image = image
    state.dnd.enabled = true
  },
  changeDndX (state, x) {
    state.dnd.x = x
  },
  changeDndY (state, y) {
    state.dnd.y = y
  },
  changeLockImage (state, image) {
    state.lock.image = image
    state.lock.enabled = true
  },
  changeLockX (state, x) {
    state.lock.x = x
  },
  changeLockY (state, y) {
    state.lock.y = y
  },
  toggleAlarm (state, enabled) {
    if (!enabled) {
      state.alarm.image = null
    }
    state.alarm.enabled = enabled
  },
  toggleBluetooth (state, enabled) {
    if (!enabled) {
      state.alarm.image = null
    }
    state.bluetooth.enabled = enabled
  },
  toggleDnd (state, enabled) {
    if (!enabled) {
      state.dnd.image = null
    }
    state.dnd.enabled = enabled
  },
  toggleLock (state, enabled) {
    if (!enabled) {
      state.lock.image = null
    }
    state.lock.enabled = enabled
  },
  togglePermision (state, allowed) {
    state.allowed = allowed
  }
}
