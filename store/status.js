export const state = () => ({
  alarm: {
    imageOn: null,
    imageOff: null,
    x: 25,
    y: 10
  },
  bluetooth: {
    imageOn: null,
    imageOff: null,
    x: 60,
    y: 10
  },
  dnd: {
    imageOn: null,
    imageOff: null,
    x: 95,
    y: 10
  },
  lock: {
    imageOn: null,
    imageOff: null,
    x: 130,
    y: 10
  }
})

export const mutations = {
  /**
   * Updates new alarm options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New alarm options.
   */
  alarm (state, obj) {
    for (const prop in obj) {
      state.alarm[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new bluetooth options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New bluetooth options.
   */
  bluetooth (state, obj) {
    for (const prop in obj) {
      state.bluetooth[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new dnd options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New dnd options.
   */
  dnd (state, obj) {
    for (const prop in obj) {
      state.dnd[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Imports status options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New status options.
   */
  import (state, obj) {
    this.commit('status/alarm', obj.alarm)
    this.commit('status/bluetooth', obj.bluetooth)
    this.commit('status/dnd', obj.dnd)
    this.commit('status/lock', obj.lock)
  },
  /**
   * Updates new lock options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New lock options.
   */
  lock (state, obj) {
    for (const prop in obj) {
      state.lock[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  }
}
