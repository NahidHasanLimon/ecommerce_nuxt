<template>
    <div class="col-lg-4 col-md-6">
        <div class="product-wrapper mb-50">
            <div class="product-img mb-25">
                <!-- <a href="product-details.html"> -->
                    <nuxt-link
                        :to="{ name: 'products-slug', params: { slug: product.name, product: product }}"      
                        class="btn btn-primary"
>
                    <img src="~assets/img/product/cp1.jpg" alt="" />
                    <img class="secondary-img" src="~assets/img/product/cp1.jpg" alt="" />
                </nuxt-link>
                <!-- </a> -->
                <div class="product-action text-center">
                    <a href="#" title="Shoppingb Cart">
                        <i class="flaticon-shopping-cart"></i>
                    </a>
                    <a href="#" title="Quick View">
                        <i class="flaticon-eye"></i>
                    </a>
                    <a href="#" data-toggle="tooltip" data-placement="right" title="Compare">
                        <i class="flaticon-compare"></i>
                    </a>
                </div>
            </div>
            <div class="product-content">
                <div class="pro-cat mb-10">
                    <template v-for="tag in product.tags" >
                        <a href="shop.html">{{tag}}</a>
                    </template>
                </div>
                <h4>
                    <a href="product-details.html">{{product.name}}</a>
                </h4>
                <div class="product-meta">
                    <div class="pro-price">
                        <span>${{product.price}} USD</span>
                        <span class="old-price">${{product.price}} USD</span>
                    </div>
                </div>
                <div class="product-wishlist">
                    <a href="#"><i class="far fa-heart" title="Wishlist"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import NuxtLogo from "./NuxtLogo.vue";
export default{
name: 'ProductCard',
props: ['product'],
components:{
    NuxtLogo
},
methods: {
},
created() {
  console.log('product is',this.product.name)
},


}
</script>