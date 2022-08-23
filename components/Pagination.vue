<template>
    <div class="basic-pagination basic-pagination-2 text-center mt-20 mb-0">
        <ul>
            <li><a href="#"><i class="fas fa-angle-double-left"></i></a></li>
            <li><a href="#">01</a></li>
            <li class="active"><a href="#">02</a></li>
            <li><a href="#">03</a></li>
            <li><a href="#"><i class="fas fa-ellipsis-h"></i></a></li>
            <li><a href="#"><i class="fas fa-angle-double-right"></i></a></li>
        </ul>
    </div>
</template>
<script>
export default{
name: 'Pagination',
props: [''],
data() {
  return {
     
  }
},
watch: {
    selectedSortBy:{
      handler: function(){
      }
    }
  },
created() {
  console.log('Pagination Card Component')
},

}
</script>