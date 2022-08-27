export default ({ app }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('updateQueryParams', (calledFrom,params) => {
        // console.log('what the hell is , update',app.router.currentRoute)

        let query = Object.assign({}, app.router.currentRoute.query);
        // console.log('what the hell is , update',app.router.currentRoute.query)
    
        console.log('what the hell is , update',query)
        console.log('Curren paramssss is::',params)
        if(params && params.length > 0){
            const arrayToStringOfChecked = params.join('_');
            query[calledFrom] =  arrayToStringOfChecked 
        }else{
              delete query[calledFrom]
             
        }
        console.log('Curren paramssss is::',params)
        app.router.push({path: app.router.currentRoute.path, query:query});

        // this.$store.dispatch("product/fetchProducts",query)



    })
  }
  