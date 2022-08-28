<template>
 <div class="shop-widget">
      <h3 class="shop-title">country</h3>
      <ul class="shop-link" v-for="country in countries">
          <li><input
              id="toy"
              type="checkbox"
              v-model="checkedCategories"
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
    checkedCategories : [],
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
    checkedCategories:{
      handler: function(){
        const query = this.$updateQueryParams('country',this.checkedCategories)
        this.$store.dispatch("product/fetchProducts",query)
      }
    }
  },
created() {
 this.checkedCategories = this.$revertQueryParamsToArray('country')
},

}
</script>