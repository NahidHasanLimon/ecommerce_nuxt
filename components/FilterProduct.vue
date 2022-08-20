<template>
   <div>
     <form
          action=""
          class="border-t border-gray-200 lg:border-t-0"
        >
          <!-- Country Card  -->
          <CountryCard></CountryCard>
          <!-- Country Card  -->

          <!-- Club Card  -->
          <ClubCard></ClubCard>
          <!-- Club Card  -->

          <div class="flex justify-between px-5 py-3 border-t border-gray-200">
            <button
              name="reset"
              type="button"
              class="text-xs font-medium text-gray-600 underline rounded"
            >
              Reset All
            </button>

            <button
              name="commit"
              type="button"
              class="px-5 py-3 text-xs font-medium text-dark bg-slate rounded"
            >
              Apply Filters
            </button>
          </div>
        </form>
   </div>
</template>
<script>
import { mapGetters } from "vuex";
import CountryCard from "/components/CountryCard.vue";
import ClubCard from "/components/ClubCard.vue";
export default{
name: 'FilterProduct',
props: [''],
components:{
    
},
created() {
  console.log('Filter Component')
},

}
</script>