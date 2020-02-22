export const state = () => ({
})

export const mutations = {
  activity (state, activity) {
    for (const prop in activity) {
      state[prop] = activity[prop]
    }
  }
}
