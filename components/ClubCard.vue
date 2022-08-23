<template>
      <div class="shop-widget">
          <h3 class="shop-title">Brand</h3>
          <ul class="shop-link" v-for="club in clubs">
              <li><i class="far fa-square"></i> Apex</li>
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
},

}
</script>