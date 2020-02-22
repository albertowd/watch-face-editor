export const state = () => ({
  allowed: false
})

export const mutations = {
  weather (state, weather) {
    for (const prop in weather) {
      state[prop] = weather[prop]
    }
  }
}
