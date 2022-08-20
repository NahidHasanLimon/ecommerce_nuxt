export const state = () => ({
    countries: []
  })
  
  export const getters = {
    getCountries(state) {
      return state.countries
    }
  }
  
  export const mutations = {
    SET_COUNTRIES(state,data) {
      state.countries = data
    }
  }

  export const actions = {
    async fetchCountries(state) {
      try {
        const data = await this.$axios.$get('/api/country')
        console.log('this is from action',data)
        state.commit('SET_COUNTRIES', data)
        }
        catch (error) {
            console.log(error)
        }
    }
  }