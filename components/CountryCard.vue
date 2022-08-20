<template>
    <div >
        
        <fieldset>
            <legend class="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
              Countries
            </legend>
            <div class="px-5 py-6 space-y-2">
                <template v-for="(country, index) in countries" >
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      class="w-5 h-5 border-gray-300 rounded "
                      v-model="checkedCountries"
                      :value="country.name"
                    />
                    <label :for="index"  class="ml-3 text-sm font-medium" >{{country.name}}</label>
                  </div>
                </template>
              

              <div class="pt-2">
                <button
                  type="button"
                  class="text-xs text-gray-500 underline"
                >
                  Reset Type
                </button>
              </div>
            </div>
        </fieldset>
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
        const filterPayload = {
            'country' : this.checkedCountries
        }
        const arrayToStringOfChecked = this.checkedCountries.join('_');
        if(arrayToStringOfChecked && arrayToStringOfChecked!== null){

          this.$router.push({path: this.$route.path, query: { country: arrayToStringOfChecked }});
        }
        // this.$store.dispatch("product/fetchProducts",filterPayload)
      }
    }
  },
created() {
  console.log('Country Card Component')
},

}
</script>