export default ({ app }, inject) => {
    inject('updateQueryParams', (calledFrom,params) => {
        let query = Object.assign({}, app.router.currentRoute.query);
        if(params && params.length > 0){
            let paramsString = ""
            if(calledFrom == 'club' || calledFrom == 'country'){
                const arrayToStringOfChecked = params.join('_')
                paramsString = arrayToStringOfChecked
            }
            if(calledFrom == 'sortBy'){
                paramsString = params
            }
            query[calledFrom] =  paramsString 
        }else{
              delete query[calledFrom]
             
        }
        console.log('Curren paramssss is::',params)
        app.router.push({path: app.router.currentRoute.path, query:query});

        // this.$store.dispatch("product/fetchProducts",query)



    })
  }
  