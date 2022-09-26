export const state = () => ({
    products: [],
    queryParams: {
      'sortBy' : '',
      'country' : '',
      'club' : '',
      },
      product: '',
  })
  
  export const getters = {
    getProducts(state) {
      return state.products
    },
    getSlugProduct(state) {
      return state.product
    }
  }
  
  export const mutations = {
    SET_PRODUCTS(state,data) {
      state.products = data
    },
    SET_PRODUCT(state,data) {
      state.product = data
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
    async fetchAProductBySlug(state, slug) {
      try {
        const data = await this.$axios.$get('/api/product/product-by-slug/'+slug)
          console.log('this is from action',data)
          state.commit('SET_PRODUCT', data)
        }
        catch (error) {
            console.log(error)
        }
    },
    
  }