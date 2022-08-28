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
        app.router.push({path: app.router.currentRoute.path, query:query});
        return query;
    })
    inject('revertSpecificQueryParamsToArray', (calledFrom) => {
        let query = Object.assign({}, app.router.currentRoute.query);
        let reverted_array = []
         if(query && Object.keys(query).length !== 0 && Object.getPrototypeOf(query) !== Object.prototype > 0){
            console.log('inside ',calledFrom)
            if(query[calledFrom]){
                if(calledFrom == 'club' || calledFrom == 'country'){
                    reverted_array = query[calledFrom].split('_')
                }
                if(calledFrom == 'sortBy'){
                    reverted_array = query[calledFrom]
                }
            }
        }
        console.log('Reverted array is,', query)
        return reverted_array;
    })
  }
  