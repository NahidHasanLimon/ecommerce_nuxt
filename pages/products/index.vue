<template>
<div>
    <div class="2xl:container 2xl:mx-auto">
        <div class="bg-gray-50 text-center lg:py-10 md:py-8 py-6">
            <p class="w-10/12 mx-auto md:w-full font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">Summer Collection Vol-1</p>
        </div>
        <div class="py-6 lg:px-20 md:px-6 px-4">
            <!-- BreadCumb -->
            <PageBreadCumb></PageBreadCumb>
            <!-- BreadCumb -->
          
            <div class="flex justify-between items-center">
                <div class="flex space-x-3 justify-center items-center">
                    <svg class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 7.5H20.25" stroke="#1F2937" stroke-miterlimit="10" stroke-linecap="round" />
                        <path d="M3.75 12H20.25" stroke="#1F2937" stroke-miterlimit="10" stroke-linecap="round" />
                        <path d="M3.75 16.5H20.25" stroke="#1F2937" stroke-miterlimit="10" stroke-linecap="round" />
                    </svg>
                    <p class="font-normal text-base leading-4 text-gray-800">Filter</p>
                </div>
                <p class="cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600">Showing 18 products</p>
                <SortAndPagination></SortAndPagination>
            </div>
            <div class="grid grid-rows-3 grid-flow-col gap-4">
              <div class="row-start-1 row-end-4 ...">
                <FilterProduct></FilterProduct>
              </div>

              <div class="row-start-1 row-end-4 ...">
                  <!-- Product Grid  -->
                    <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10 ">
                        <!-- PRoduct Card  -->
                        <template v-for="product in products">
                          <ProductCard :product="product" @productQuickView="productQuickView"></ProductCard>
                        </template>
                    </div>
                  <!-- Product Grid  -->
              </div>
            </div>
            
            <div class="flex justify-center items-center">
                <button class="hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">Load More</button>
            </div>
        </div>
    </div>
    <!-- modal  -->
    <div class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 " v-if="showProductQuickViewModal">
          <!-- modal -->
          <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalXlLabel"></h5>
                <button type="button"
                  class=" bg-red-500 btn-close box-content text-white   hover:text-black hover:opacity-75 hover:no-underline" @click="toggleProductQuickViewModal">Close</button>
              </div>
              <div class="modal-body relative bg-gray-500">
                <ProductQuickView  @toggleProductQuickViewModal="toggleProductQuickViewModal" :product="clicked_product"></ProductQuickView> 
              </div>
            </div>
          </div>
        </div>
    <!-- modal  -->
  </div>
</template>
<script>

import PageBreadCumb from "/components/PageBreadCumb.vue";
import SortAndPagination from "/components/SortAndPagination.vue";
import ProductCard from "../../components/ProductCard.vue";
import ProductQuickView from "../../components/ProductQuickView.vue";
import FilterProduct from "../../components/FilterProduct.vue";
export default{
name: 'ProductIndex',
components:{
    ProductCard,
    FilterProduct
},
data(){
  return {
    showProductQuickViewModal: false,
    products_check: [],
    clicked_product: null,
  }
},
computed: {
  products() {
      return this.$store.state.product.products;
    },
    
},
methods: {
  toggleProductQuickViewModal(){
    this.showProductQuickViewModal = !this.showProductQuickViewModal;
  },
  fetchProducts(){
    this.$store.dispatch("product/fetchProducts")
  },
  productQuickView(product){
    this.clicked_product = product
     this.toggleProductQuickViewModal()
    console.log('Product Quick View From Index Page', JSON.stringify(product))
  }
},
mounted() {
    
      this.fetchProducts()
    
    
  },
  watch: {
    products_check:{
      handler: function(){
        // console.log(this.products);
        this.$store.dispatch("product/fetchProducts")
      }
    }
  }
}
</script>