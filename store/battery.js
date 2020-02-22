export const state = () => ({
})

export const mutations = {
  battery (state, battery) {
    for (const prop in battery) {
      state[prop] = battery[prop]
    }
  }
}
