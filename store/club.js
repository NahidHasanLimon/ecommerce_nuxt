export const state = () => ({
    clubs: []
  })
  export const getters = {
    getClubs(state) {
      return state.clubs
    }
  }
  export const mutations = {
    SET_CLUBS(state,data) {
      state.clubs = data
    }
  }
  export const actions = {
    async fetchclubs(state) {
      try {
        const data = await this.$axios.$get('/api/club')
        console.log('this is from action',data)
        state.commit('SET_CLUBS', data)
        }
        catch (error) {
            console.log(error)
        }
    }
  }