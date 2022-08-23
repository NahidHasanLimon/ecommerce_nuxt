<template>
      <div class="shop-widget">
          <h3 class="shop-title">Club</h3>
          <ul class="shop-link" v-for="club in clubs">
              <li><input
                  id="toy"
                  type="checkbox"
                  name="type[toy]"
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
computed: {
  clubs() {
      return this.$store.state.club.clubs;
    },
    
},
mounted() {
    this.$store.dispatch("club/fetchclubs")
},
created() {
  console.log('club Card Component')
  if (process.client){

    console.log(window.innerWidth, window.innerHeight);
  }
},

}
</script>