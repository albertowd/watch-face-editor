export const state = () => ({
  example: true,
  content: '{}'
})

export const mutations = {
  json (state, json) {
    for (const prop in json) {
      state[prop] = json[prop]
    }
  }
}
