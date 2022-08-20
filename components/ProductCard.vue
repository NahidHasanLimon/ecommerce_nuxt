<template>
     <div class="relative">
          <div class="absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50"><p class="text-xs leading-3 text-gray-800">New</p></div>
          <div class="relative group">
              <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <img class="w-full" src="https://i.ibb.co/HqmJYgW/gs-Kd-Pc-Iye-Gg.png" alt="A girl Posing Image" />
              <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                  <button class="font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                  <button class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white" @click="$emit('productQuickView',product)">Quick View</button>
              </div>
          </div>
          <p class="font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">{{product.name}} {{product.clubId ? product.clubId.name : ''}}</p>
          <p class="font-semibold text-xl leading-5 text-gray-800 mt-4">${{product.price}}</p>
          <p class="font-normal text-base leading-4 text-gray-600 mt-4">2 colours</p>
      </div>
</template>
<script>
import { mapGetters } from "vuex";
export default{
name: 'ProductCard',
props: ['product'],
components:{
    
},
methods: {
  // productQuickViewBinded(){
  //    console.log('product quick view clicked')
  // }
},
created() {
  console.log('product is',this.product.name)
},


}
</script>