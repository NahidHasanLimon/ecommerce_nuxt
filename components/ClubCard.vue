<template>
  <div class="shop-widget">
      <h3 class="shop-title">Club</h3>
      <ul class="shop-link" v-for="club in clubs">
          <li><input
              id="toy"
              type="checkbox"
              v-model="checkedClubs"
              :value="club.name"
              class="w-5 h-5 border-gray-300 rounded"
            /> {{club.name}}</li>
          
      </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import _ from "lodash"
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
    updateQueryParams() {
       let query = Object.assign({}, this.$route.query);
        if(this.checkedClubs && this.checkedClubs.length){
            const arrayToStringOfChecked = this.checkedClubs.join('_');
            query['club'] =  arrayToStringOfChecked 
        }else{
              delete query.club
        }
        this.$router.push({path: this.$route.path, query:query});

        this.$store.dispatch("product/fetchProducts",query)
    }
  },
watch: {
    checkedClubs:{
      handler: function(){
        this.$updateQueryParams('club',this.checkedClubs)
        // this.updateQueryParams()
        
      }
    }
  },
created() {
  console.log('club Card Component')
  if (process.client){

    console.log(window.innerWidth, window.innerHeight);
  }
},

}
</script>