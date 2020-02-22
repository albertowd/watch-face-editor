export const state = () => ({
  allowed: false
})

export const mutations = {
  date (state, date) {
    for (const prop in date) {
      state[prop] = date[prop]
    }
  }
}
