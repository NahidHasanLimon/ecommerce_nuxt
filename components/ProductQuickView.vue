<template>
        <div class="flex justify-center items-center">
             <div id="menu">
                <div class="2xl:container 2xl:mx-auto relative flex justify-start w-96 md:w-10/12 xl:w-11/12 item-start flex-col lg:flex-row lg:space-x-8 py-12 md:py-16 lg:py-12 px-4 md:px-8 lg:px-16 bg-white">
                    <div class="w-full">
                        <div class="relative">
                            <div class="slider">
                                <div class="slide-ana flex flex-shrink-0">
                                    <div class="flex flex-shrink-0" style="transform: translateX(-100%)">
                                        <img class="lg:block hidden w-full h-full object-center object-cover" src="https://i.ibb.co/wBknrzK/pexels-monstera-6311641-1-2.png" alt="A girl posing front" />
                                        <img class="hidden md:block lg:hidden w-full h-full object-center object-cover" src="https://i.ibb.co/JqhZhhp/pexels-monstera-6311641-1-3.png" alt="A girl posing front" />
                                        <img class="block md:hidden w-full h-full object-center object-cover" src="https://i.ibb.co/FXb2RfJ/pexels-dominika-roseclay-5462562-1.png" alt="A girl posing front" />
                                    </div>
                                    <div class="flex flex-shrink-0" style="transform: translateX(0%)">
                                        <img class="lg:block hidden w-full h-full object-center object-cover" src="https://i.ibb.co/FwRy0WL/pexels-monstera-6311575-2-1.png" alt="A girl posing Back" />
                                        <img class="hidden md:block lg:hidden w-full h-full object-center object-cover" src="https://i.ibb.co/k0bJRQk/pexels-monstera-6311575-3-1.png" alt="A girl posing Back" />
                                        <img class="block md:hidden w-full h-full object-center object-cover" src="https://i.ibb.co/0f1gRTt/pexels-monstera-6311575-4.png" alt="A girl posing Back" />
                                    </div>
                                </div>
                            </div>
                            <div class="transition duration-150 absolute bottom-0 w-full h-full flex justify-between items-center px-4">
                                <button @click="goPrev()" aria-label="previous" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full flex justify-center items-center">
                                   <img class="" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/quick-view-4-svg1.svg" alt="previous">
                                </button>
                                <button @click="goNext()" aria-label="Next" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full flex justify-center items-center">
                                    <img class="transform -rotate-180" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/quick-view-4-svg1.svg" alt="Next">
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 md:mt-8 lg:mt-0 flex justify-start items-start w-full flex-col space-y-6">
                        <h2 class="lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 font-semibold">Plain White Tshirt</h2>
                        <div class="flex justify-start items-center mt-4">
                            <p class="font-normal text-lg leading-6 text-gray-600 mr-4">$190</p>
                            <div class="cursor-pointer flex space-x-2 mr-3">
                               <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/quick_view_4-svg2.svg" alt="stars">
                               <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/quick_view_4-svg2dark.svg" alt="stars">
                            </div>
                            <p class="font-normal text-sm leading-3 hover:text-gray-700 duration-100 cursor-pointer text-gray-500 underline">18 reviews</p>
                        </div>
                        <div class="mt-10">
                            <p id="text" class="font-semibold text-base leading-4 text-gray-800">White</p>
                            <div class="flex space-x-2 mt-4">
                                <div tabindex="0" @click="selected('White')" class="focus:outline-none ring-1 ring-transparent ring-offset-2 focus:ring-gray-800 rounded-full cursor-pointer w-8 h-8 bg-gray-50"></div>
                                <div tabindex="0" @click="selected('Red')" class="focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-800 rounded-full cursor-pointer w-8 h-8 bg-red-700"></div>
                                <div tabindex="0" @click="selected('Yellow')" class="focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-800 rounded-full cursor-pointer w-8 h-8 bg-yellow-300"></div>
                            </div>
                        </div>
                        <div class="mt-10 w-full">
                            <div class="flex justify-between">
                                <p class="font-semibold text-base leading-4 text-gray-800">Size</p>
                                <p class="cursor-pointer hover:text-gray-800 font-medium text-base leading-4 text-gray-500 underline">Size guide</p>
                            </div>
                            <div class="grid grid-cols-3 gap-10 sm:flex sm:flex-wrap md:gap-4 sm:justify-between lg:justify-start mt-4">
                                <div @click="selectedSize('XSS')" id="XSS" class="font-medium text-base leading-4 text-gray-800 border border-gray-200 py-3 w-20 text-center cursor-pointer hover:border-gray-800 focus:border-gray-800">XXS</div>
                                <div @click="selectedSize('XS')" id="XS" class="font-medium text-base leading-4 text-gray-800 border border-gray-200 py-3 w-20 text-center cursor-pointer hover:border-gray-800 focus:border-gray-800">XS</div>
                                <div @click="selectedSize('S')" id="S" class="font-medium text-base leading-4 text-gray-800 border border-gray-200 py-3 w-20 text-center cursor-pointer hover:border-gray-800 focus:border-gray-800">S</div>
                                <div @click="selectedSize('M')" id="M" class="font-medium text-base leading-4 text-gray-800 border border-gray-200 py-3 w-20 text-center cursor-pointer hover:border-gray-800 focus:border-gray-800">M</div>
                                <div @click="selectedSize('L')" id="L" class="font-medium text-base leading-4 text-gray-800 border border-gray-200 py-3 w-20 text-center cursor-pointer hover:border-gray-800 focus:border-gray-800">L</div>
                                <div @click="selectedSize('XL')" id="XL" class="font-medium text-base leading-4 text-gray-800 border border-gray-200 py-3 w-20 text-center cursor-pointer hover:border-gray-800 focus:border-gray-800">XL</div>
                            </div>
                        </div>
                        <p class="mt-4 font-normal text-sm leading-3 text-gray-500 hover:text-gray-600 duration-100 underline cursor-pointer">Find the perfect size?</p>

                        <div class="flex flex-col w-full space-y-4 mt-10">
                            <button class="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 lg:w-96 w-full hover:bg-gray-900 text-base font-medium leading-4 bg-gray-800 py-4 text-white">Add to Bag</button>
                            <button class="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 lg:w-96 w-full hover:bg-gray-300 text-base font-medium leading-4 text-gray-800 py-4 bg-white">Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    data(){
        return{
            slides:null,
            slideSayisi:null,
            loop:null,
        }
    },
    mounted(){
        //  this.slides = document.querySelectorAll(".slide-ana>div");
        //     this.slideSayisi = this.slides.length;
        //     for (let index = 0; index < this.slides.length; index++) {
        //         const element = this.slides[index];
        //         element.style.transform = "translateX(" + 100 * index + "%)";
        //     }
        //     this.loop = 0 + 1000 * slideSayisi;

            

        //     let menu = document.getElementById("menu");
            

            

            
    },
    methods:{
         goNext() {
                this.loop++;
                for (let index = 0; index < this.slides.length; index++) {
                    const element = this.slides[index];
                    element.style.transform = "translateX(" + 100 * (index - (this.loop % this.slideSayisi)) + "%)";
                }
            },

             goPrev() {
                this.loop--;
                for (let index = 0; index < this.slides.length; index++) {
                    const element = this.slides[index];
                    element.style.transform = "translateX(" + 100 * (index - (this.loop % this.slideSayisi)) + "%)";
                }
            },
        showMenu (flag)  {
                if (flag) {
                    menu.classList.toggle("hidden");
                }
            },
         selected(color) {
                document.getElementById("text").innerText = color;
            },
         selectedSize(text) {
                var ele = document.getElementById(text);
                var parent = ele.parentNode;

                var children = parent.children;
                for (var i = 0; i < children.length; i++) {
                    if (children[i].classList.contains("border-gray-800")) {
                        children[i].classList.remove("border-gray-800");
                    }
                }
                ele.classList.remove("border-gray-200");
                ele.classList.add("border-gray-800");
            }
    }
}
</script>

<style>
            .slider {
                width: 100%;
                position: relative;
                overflow: hidden;
            }

            .slide-ana {
                height: 539px;
            }

            .slide-ana > div {
                width: 100%;
                height: 100%;
                position: absolute;
                transition: all 1s;
            }
        </style>