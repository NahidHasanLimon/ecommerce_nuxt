<template>
  <div class="shop-widget">
      <h3 class="shop-title">Club</h3>
      <ul class="shop-link" v-for="club in clubs" :key="club._id">
          <li><input
              id="toy"
              type="checkbox"
              v-model="checkedClubs"
              :value="club._id"
              class="w-5 h-5 border-gray-300 rounded"
            /> {{club.name}}</li>
          
      </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default{
name: 'ClubCard',
props: [''],
components:{
    
},
data() {
  return {
    checkedClubs : [],
  }
},
computed: {
  clubs() {
      return this.$store.state.club.clubs;
    },
    
},
mounted() {
    this.$store.dispatch("club/fetchclubs")  
},
  methods: {
  },
watch: {
    checkedClubs:{
      handler: function(){
         this.$store.dispatch("product/fetchProducts",this.$updateQueryParams('club',this.checkedClubs))
        
      }
    }
  },
created() {
  this.checkedClubs = this.$revertSpecificQueryParamsToArray('club')
},

}
</script>