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
                            <img src="~/assets/img/bg/shop-banner.jpg" alt="">
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
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div class="row">
                                    <div class="col-xl-5">
                                        <div class="product-wrapper mb-30">
                                            <div class="product-img">
                                                <a href="product-details.html">
                                                    <img src="~/assets/img/product/pro13.jpg" alt="">
                                                    <img class="secondary-img" src="~/assets/img/product/pro14.jpg" alt="">
                                                </a>
                                                <div class="sale-tag">
                                                    <span class="new">new</span>
                                                    <span class="sale">sale</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-7">
                                        <div class="product-content pro-list-content pr-0 mb-50">
                                            <div class="pro-cat mb-10">
                                                <a href="shop.html">decor, </a>
                                                <a href="shop.html">furniture</a>
                                            </div>
                                            <h4>
                                                <a href="product-details.html">Minimal Troma Furniture</a>
                                            </h4>
                                            <div class="product-meta mb-10">
                                                <div class="pro-price">
                                                    <span>$119.00 USD</span>
                                                    <span class="old-price">$230.00 USD</span>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <div class="product-action">
                                                <a href="#" title="Shoppingb Cart">
                                                    <i class="flaticon-shopping-cart"></i>
                                                </a>
                                                <a href="#" title="Quick View">
                                                    <i class="flaticon-eye"></i>
                                                </a>
                                                <a href="#" title="Wishlist"><i class="flaticon-like"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-5">
                                        <div class="product-wrapper mb-30">
                                            <div class="product-img">
                                                <a href="product-details.html">
                                                    <img src="~/assets/img/product/pro11.jpg" alt="">
                                                    <img class="secondary-img" src="~/assets/img/product/pro12.jpg" alt="">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-7">
                                        <div class="product-content pro-list-content pr-0 mb-50">
                                            <div class="pro-cat mb-10">
                                                <a href="shop.html">decor, </a>
                                                <a href="shop.html">furniture</a>
                                            </div>
                                            <h4>
                                                <a href="product-details.html">Minimal Troma Furniture</a>
                                            </h4>
                                            <div class="product-meta mb-10">
                                                <div class="pro-price">
                                                    <span>$119.00 USD</span>
                                                    <span class="old-price">$230.00 USD</span>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <div class="product-action">
                                                <a href="#" title="Shoppingb Cart">
                                                    <i class="flaticon-shopping-cart"></i>
                                                </a>
                                                <a href="#" title="Quick View">
                                                    <i class="flaticon-eye"></i>
                                                </a>
                                                <a href="#" title="Wishlist"><i class="flaticon-like"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-5">
                                        <div class="product-wrapper mb-30">
                                            <div class="product-img">
                                                <a href="product-details.html">
                                                    <img src="~/assets/img/product/pro15.jpg" alt="">
                                                    <img class="secondary-img" src="~/assets/img/product/pro16.jpg" alt="">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-7">
                                        <div class="product-content pro-list-content pr-0 mb-50">
                                            <div class="pro-cat mb-10">
                                                <a href="shop.html">decor, </a>
                                                <a href="shop.html">furniture</a>
                                            </div>
                                            <h4>
                                                <a href="product-details.html">Minimal Troma Furniture</a>
                                            </h4>
                                            <div class="product-meta mb-10">
                                                <div class="pro-price">
                                                    <span>$119.00 USD</span>
                                                    <span class="old-price">$230.00 USD</span>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <div class="product-action">
                                                <a href="#" title="Shoppingb Cart">
                                                    <i class="flaticon-shopping-cart"></i>
                                                </a>
                                                <a href="#" title="Quick View">
                                                    <i class="flaticon-eye"></i>
                                                </a>
                                                <a href="#" title="Wishlist"><i class="flaticon-like"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-5">
                                        <div class="product-wrapper mb-30">
                                            <div class="product-img">
                                                <a href="product-details.html">
                                                    <img src="~/assets/img/product/pro6.jpg" alt="">
                                                    <img class="secondary-img" src="~/assets/img/product/pro7.jpg" alt="">
                                                </a>
                                                <div class="sale-tag">
                                                    <span class="new">new</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-7">
                                        <div class="product-content pro-list-content pr-0 mb-50">
                                            <div class="pro-cat mb-10">
                                                <a href="shop.html">decor, </a>
                                                <a href="shop.html">furniture</a>
                                            </div>
                                            <h4>
                                                <a href="product-details.html">Minimal Troma Furniture</a>
                                            </h4>
                                            <div class="product-meta mb-10">
                                                <div class="pro-price">
                                                    <span>$119.00 USD</span>
                                                    <span class="old-price">$230.00 USD</span>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <div class="product-action">
                                                <a href="#" title="Shoppingb Cart">
                                                    <i class="flaticon-shopping-cart"></i>
                                                </a>
                                                <a href="#" title="Quick View">
                                                    <i class="flaticon-eye"></i>
                                                </a>
                                                <a href="#" title="Wishlist"><i class="flaticon-like"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-5">
                                        <div class="product-wrapper mb-30">
                                            <div class="product-img">
                                                <a href="product-details.html">
                                                    <img src="~/assets/img/product/pro18.jpg" alt="">
                                                    <img class="secondary-img" src="~/assets/img/product/pro19.jpg" alt="">
                                                </a>
                                                <div class="sale-tag">
                                                    <span class="new">new</span>
                                                    <span class="sale">sale</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-7">
                                        <div class="product-content pro-list-content pr-0 mb-50">
                                            <div class="pro-cat mb-10">
                                                <a href="shop.html">decor, </a>
                                                <a href="shop.html">furniture</a>
                                            </div>
                                            <h4>
                                                <a href="product-details.html">Minimal Troma Furniture</a>
                                            </h4>
                                            <div class="product-meta mb-10">
                                                <div class="pro-price">
                                                    <span>$119.00 USD</span>
                                                    <span class="old-price">$230.00 USD</span>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <div class="product-action">
                                                <a href="#" title="Shoppingb Cart">
                                                    <i class="flaticon-shopping-cart"></i>
                                                </a>
                                                <a href="#" title="Quick View">
                                                    <i class="flaticon-eye"></i>
                                                </a>
                                                <a href="#" title="Wishlist"><i class="flaticon-like"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-5">
                                        <div class="product-wrapper mb-30">
                                            <div class="product-img">
                                                <a href="product-details.html">
                                                    <img src="~/assets/img/product/pro5.jpg" alt="">
                                                    <img class="secondary-img" src="~/assets/img/product/pro6.jpg" alt="">
                                                </a>
                                                <div class="sale-tag">
                                                    <span class="new">new</span>
                                                    <span class="sale">sale</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-7">
                                        <div class="product-content pro-list-content pr-0 mb-50">
                                            <div class="pro-cat mb-10">
                                                <a href="shop.html">decor, </a>
                                                <a href="shop.html">furniture</a>
                                            </div>
                                            <h4>
                                                <a href="product-details.html">Minimal Troma Furniture</a>
                                            </h4>
                                            <div class="product-meta mb-10">
                                                <div class="pro-price">
                                                    <span>$119.00 USD</span>
                                                    <span class="old-price">$230.00 USD</span>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <div class="product-action">
                                                <a href="#" title="Shoppingb Cart">
                                                    <i class="flaticon-shopping-cart"></i>
                                                </a>
                                                <a href="#" title="Quick View">
                                                    <i class="flaticon-eye"></i>
                                                </a>
                                                <a href="#" title="Wishlist"><i class="flaticon-like"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-5">
                                        <div class="product-wrapper mb-30">
                                            <div class="product-img">
                                                <a href="product-details.html">
                                                    <img src="~/assets/img/product/pro20.jpg" alt="">
                                                    <img class="secondary-img" src="~/assets/img/product/pro21.jpg" alt="">
                                                </a>
                                                <div class="sale-tag">
                                                    <span class="new">new</span>
                                                    <span class="sale">sale</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-7">
                                        <div class="product-content pro-list-content pr-0 mb-50">
                                            <div class="pro-cat mb-10">
                                                <a href="shop.html">decor, </a>
                                                <a href="shop.html">furniture</a>
                                            </div>
                                            <h4>
                                                <a href="product-details.html">Minimal Troma Furniture</a>
                                            </h4>
                                            <div class="product-meta mb-10">
                                                <div class="pro-price">
                                                    <span>$119.00 USD</span>
                                                    <span class="old-price">$230.00 USD</span>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <div class="product-action">
                                                <a href="#" title="Shoppingb Cart">
                                                    <i class="flaticon-shopping-cart"></i>
                                                </a>
                                                <a href="#" title="Quick View">
                                                    <i class="flaticon-eye"></i>
                                                </a>
                                                <a href="#" title="Wishlist"><i class="flaticon-like"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-5">
                                        <div class="product-wrapper mb-30">
                                            <div class="product-img">
                                                <a href="product-details.html">
                                                    <img src="~/assets/img/product/pro9.jpg" alt="">
                                                    <img class="secondary-img" src="~/assets/img/product/pro10.jpg" alt="">
                                                </a>
                                                <div class="sale-tag">
                                                    <span class="new">new</span>
                                                    <span class="sale">sale</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-7">
                                        <div class="product-content pro-list-content pr-0 mb-50">
                                            <div class="pro-cat mb-10">
                                                <a href="shop.html">decor, </a>
                                                <a href="shop.html">furniture</a>
                                            </div>
                                            <h4>
                                                <a href="product-details.html">Minimal Troma Furniture</a>
                                            </h4>
                                            <div class="product-meta mb-10">
                                                <div class="pro-price">
                                                    <span>$119.00 USD</span>
                                                    <span class="old-price">$230.00 USD</span>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <div class="product-action">
                                                <a href="#" title="Shoppingb Cart">
                                                    <i class="flaticon-shopping-cart"></i>
                                                </a>
                                                <a href="#" title="Quick View">
                                                    <i class="flaticon-eye"></i>
                                                </a>
                                                <a href="#" title="Wishlist"><i class="flaticon-like"></i></a>
                                            </div>
                                        </div>
                                    </div>
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