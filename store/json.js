export const state = () => ({
  changed: false,
  parsed: '{}'
})

export const mutations = {
  json (state, json) {
    for (const prop in json) {
      state[prop] = json[prop]
    }
  }
}
