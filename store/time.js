export const state = () => ({
  allowed: false
})

export const mutations = {
  time (state, time) {
    for (const prop in time) {
      state[prop] = time[prop]
    }
  }
}
