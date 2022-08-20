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
      console.log('ki je korbo',state.queryParams)
      // const temp_params = {};
      if(filterPayload){
        if(filterPayload.sortBy && typeof(filterPayload.sortBy) != "undefined" && (filterPayload.sortBy !== null)){
          console.log('this is from sortBy')
          const sortbyArr = filterPayload.sortBy.split("-")
          state.queryParams['sortBy'] = sortbyArr[0]; 
          state.queryParams['orderBy'] = sortbyArr[1]
        }
        // if(filterPayload.country && typeof(filterPayload.country) != "undefined" && (filterPayload.country !== null)){
        //   console.log('this is from country')
        //   temp_params['country'] = JSON.stringify(filterPayload.country)
        // }
        
      }
      const params = state.queryParams
      
      

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