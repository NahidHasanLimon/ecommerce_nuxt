<template>
    <div >
        
        <fieldset>
            <legend class="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
              Clubs
            </legend>

            <div class="px-5 py-6 space-y-2">
                <template v-for="club in clubs">
                <div class="flex items-center">
                <input
                  id="toy"
                  type="checkbox"
                  name="type[toy]"
                  class="w-5 h-5 border-gray-300 rounded"
                />

                <label for="toy"  class="ml-3 text-sm font-medium" >{{club.name}}</label>
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