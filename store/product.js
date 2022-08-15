export const state = () => ({
    products: []
  })
  
  export const getters = {
    getProducts(state) {
      return state.products
    }
  }
  
  export const mutations = {
    SET_PRODUCTS(state,data) {
      state.products = data
    }
  }
  
  export const actions = {
    async fetchProducts(state) {
      try {
        const data = await this.$axios.$get('/api/product')
        console.log('this is from action',data)
        state.commit('SET_PRODUCTS', data)
        }
        catch (error) {
            console.log(error)
        }
    //   const res = { data: 10 };
    //   state.products = res.data;
    //   return res.data;
    }
  }