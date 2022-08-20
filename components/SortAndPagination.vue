<template>
    <div class="flex justify-center">
        <div class="">
            <div class="form-group">
                <div class="custom-select">
                    <label>Sort By:</label>
                    <select id="input-sort" class=""  v-model="selectedSortBy">
                    <option value="">Default</option>
                    <option value="price-ASC">Price (Low &gt; High)</option>
                    <option value="price-DESC">Price (High &gt; Low)</option>
                    <option value="name-ASC">Name (A to Z)</option>
                    <option value="name-DESC">Name (Z to A)</option>
                </select>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
name: 'SortAndPagination',
props: [''],
data() {
  return {
     selectedSortBy: ''
  }
},
watch: {
    selectedSortBy:{
      handler: function(){
        const filterPayload = {
            'sortBy' : this.selectedSortBy
        }
        this.$store.dispatch("product/fetchProducts",filterPayload)
      }
    }
  },
created() {
  console.log('Sort and Pagination Card Component')
},

}
</script>