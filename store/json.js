export const state = () => ({
  changed: false,
  parsed: '{}'
})

export const mutations = {
/**
 * Updated ths json changed flag.
 * @param {object} state Actual state to update.
 * @param {boolean} changed True if there is new json available.
 */
  changed (state, changed) {
    state.changed = changed
  },
  /**
   * Updates the json content from the ui.
   * @param {object} state Actual state to update.
   * @param {object} obj New json content.
   */
  json (state, json) {
    state.changed = true
    for (const prop in json) {
      state[prop] = json[prop]
    }
  }
}
