export const state = () => ({
  allowed: false
})

export const mutations = {
  togglePermision (state, allowed) {
    state.allowed = allowed
  }
}
