<template>
<main>
        <!-- breadcrumb-area-start -->
        <PageBreadCumb></PageBreadCumb>
        <!-- breadcrumb-area-end -->

        <!-- shop-area start -->
        <section class="shop-area pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-4">
                        <!-- Filter Sidebar -->
                        <FilterProduct></FilterProduct>
                        <!-- Filter Sidebar -->
                    </div>
                    <div class="col-xl-8 col-lg-8">
                        <div class="shop-banner mb-50">
                            <!-- <img src="~/assets/img/bg/shop-banner.jpg" alt=""> -->
                        </div>
                        <!-- tab filter -->
                        <div class="row mb-10">
                            <div class="col-xl-5 col-lg-6 col-md-6">
                                <div class="product-showing mb-40">
                                    <p>Showing 1–22 of 32 results</p>
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-6 col-md-6">
                                <div class="shop-tab f-right">
                                    <ul class="nav text-center" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
                                                aria-selected="true"><i class="fas fa-list-ul"></i> </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
                                                aria-selected="false"><i class="fas fa-th-large"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- Sort   -->
                                <Sort></Sort>
                                <!-- Sort a  -->
                            </div>
                        </div>
                        <!-- tab content -->
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="row">
                                <!-- Product card  -->
                                    <template v-for="product in  products">
                                        <ProductCard :product="product"></ProductCard>
                                    </template>
                                 <!-- Product card  -->
                                </div>
                            </div>
                            
                        </div>
                        <!-- Pagination -->
                        <Pagination></Pagination>
                        <!-- Pagination -->
                    </div>
                </div>
            </div>
        </section>
        <!-- shop-area end -->


        </main>
</template>
<script>


import ProductQuickView from "../../components/ProductQuickView.vue";
import PageBreadCumb from "../../components/PageBreadCumb.vue";
import FilterProduct from "../../components/FilterProduct.vue";
import Sort from "../../components/Sort.vue";
import Pagination from "../../components/Pagination.vue";
import ProductCard from "../../components/ProductCard.vue";
export default{
name: 'ProductIndex',
components:{
    ProductCard,
    FilterProduct,
    PageBreadCumb,
    FilterProduct,
    Sort,
    Pagination,
    Pagination,
    ProductCard
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
//   fetchProducts(){
//     this.$store.dispatch("product/fetchProducts")
//   },
  productQuickView(product){
    this.clicked_product = product
     this.toggleProductQuickViewModal()
    console.log('Product Quick View From Index Page', JSON.stringify(product))
  }
},
mounted() {
    //   this.fetchProducts()
  },
  watch: {
    products_check:{
      handler: function(){
        // this.$store.dispatch("product/fetchProducts")
      }
    }
  }
}
</script>