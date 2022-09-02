<template>
<div class="pro-filter mb-40 f-right">
  <form action="#">
      <select name="pro-filter" id="pro-filter"  v-model="selectedSortBy">
          <option>Default</option>
          <option value="price-ASC">Price (Low &gt; High)</option>
          <option value="price-DESC">Price (High &gt; Low)</option>
          <option value="name-ASC">Name (A to Z)</option>
          <option value="name-DESC">Name (Z to A)</option>
      </select>
  </form>
</div>

</template>
<script>
export default{
name: 'Sort',
props: [],
data() {
  return {
     selectedSortBy: ''
  }
},
watch: {
    selectedSortBy:{
      handler: function(){
        this.$store.dispatch("product/fetchProducts",this.$updateQueryParams('sortBy',this.selectedSortBy))
      }
    }
  },
created() {
   this.selectedSortBy = this.$revertSpecificQueryParamsToArray('sortBy') ? this.$revertSpecificQueryParamsToArray('sortBy') : ''
},

}
</script>