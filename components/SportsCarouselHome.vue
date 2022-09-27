<template>
    <div class="slider-area pos-relative">
      <VueSlickCarousel :arrows="true" :dots="true">
        <div class="single-slider slide-1-style slide-height d-flex align-items-center" > 
            <div class="shape-title bounce-animate">
                            <h2>UX</h2>
                        </div>
                        <div class="shape-icon bounce-animate">
                            <img src="img/slider/shape-icon.png" alt="">
                        </div>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-xl-7">
                                    <div class="slide-content">
                                        <span data-animation="fadeInRight" data-delay=".2s">Furniture Collection</span>
                                        <h1 data-animation="fadeInUp" data-delay=".5s">Synnes Dining
                                        Chair Upholstered</h1>
                                        <div class="slide-btn">
                                            <a class="btn theme-btn" href="shop.html" data-animation="fadeInLeft" data-delay=".7s">shop now</a>
                                            <a class="btn white-btn" href="shop.html" data-animation="fadeInRight" data-delay=".9s">category</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-5">
                                    <div class="slide-shape1" data-animation="bounceInRight" data-delay=".9s"><img src="img/slider/shape1.png" alt=""></div>
                                    <div class="slide-shape2" data-animation="bounceInRight" data-delay="1.2s"><img src="img/slider/shape2.png" alt=""></div>
                                </div>
                            </div>
                        </div>
        </div>

        <div class="single-slider slide-1-style slide-height d-flex align-items-center" > 
            <div class="shape-title bounce-animate">
                            <h2>UX</h2>
                        </div>
                        <div class="shape-icon bounce-animate">
                            <img src="img/slider/shape-icon.png" alt="">
                        </div>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-xl-7">
                                    <div class="slide-content">
                                        <span data-animation="fadeInRight" data-delay=".2s">Furniture Collection</span>
                                        <h1 data-animation="fadeInUp" data-delay=".5s">Synnes Dining
                                        Chair Upholstered</h1>
                                        <div class="slide-btn">
                                            <a class="btn theme-btn" href="shop.html" data-animation="fadeInLeft" data-delay=".7s">shop now</a>
                                            <a class="btn white-btn" href="shop.html" data-animation="fadeInRight" data-delay=".9s">category</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-5">
                                    <div class="slide-shape1" data-animation="bounceInRight" data-delay=".9s"><img src="img/slider/shape1.png" alt=""></div>
                                    <div class="slide-shape2" data-animation="bounceInRight" data-delay="1.2s"><img src="img/slider/shape2.png" alt=""></div>
                                </div>
                            </div>
                        </div>
        </div>
      </VueSlickCarousel>
    </div>
  </template>
   
  <script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
   
    export default {
      name: 'MyComponent',
      components: { VueSlickCarousel },
    }
  </script> 
  <style scoped>
    .single-slider{
        background-image: url('~assets/img/slider/slide1-1.jpg');
    }
  </style>