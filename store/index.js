export const state = () => ({
    counter: 0
  })
  
  export const getters = {
    getCounter(state) {
      return state.counter
    },
    isAuthenticated(state) {
      return state.auth.loggedIn
    },
    loggedInUser(state) {
      return state.auth.user
    }
  }
  
  export const mutations = {
    increment(state) {
      state.counter++
    }
  }
  
  export const actions = {
    
    async fetchCounter(state) {
      // make request
      const res = { data: 10 };
      state.counter = res.data;
      return res.data;
    }
  }