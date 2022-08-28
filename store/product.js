export const state = () => ({
    products: [],
    queryParams: {
      'sortBy' : '',
      'country' : '',
      'club' : '',
      }
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
    
    async fetchProducts(state, filterPayload) {
      const params = filterPayload
      console.log('Filter payload is',filterPayload)
      
      

      try {
        const data = await this.$axios.$get('/api/product',{params})
        console.log('this is from action',data)
        state.commit('SET_PRODUCTS', data)
        }
        catch (error) {
            console.log(error)
        }
    },
    async fetchProductsBacked(state) {
      try {
        const data = await this.$axios.$get('/api/product')
        console.log('this is from action',data)
        state.commit('SET_PRODUCTS', data)
        }
        catch (error) {
            console.log(error)
        }
    }
  }