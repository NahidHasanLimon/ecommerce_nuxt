<template>
 <div class="shop-widget">
      <h3 class="shop-title">country</h3>
      <ul class="shop-link" v-for="country in countries">
          <li><input
              id="toy"
              type="checkbox"
              v-model="checkedCountries"
              :value="country.name"
              class="w-5 h-5 border-gray-300 rounded"
            /> {{country.name}}</li>
          
      </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default{
name: 'CountryCard',
props: [''],
data() {
  return {
    checkedCountries : [],
  }
},
components:{
    
},
computed: {
  countries() {
      return this.$store.state.country.countries;
    },
},
mounted(){
    this.$store.dispatch("country/fetchCountries")
},
watch: {
    checkedCountries:{
      handler: function(){
        this.$store.dispatch("product/fetchProducts",this.$updateQueryParams('country',this.checkedCountries))
      }
    }
  },
created() {
  this.checkedCountries = this.$revertSpecificQueryParamsToArray('country')
},

}
</script>