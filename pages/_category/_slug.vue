<template>
    <div>
        <h1>{{ product }} / {{ slug }} Cat Slug Page</h1>
    </div>
</template>
<script>
export default {
    data(){
  return {
    showProductQuickViewModal: false,
    products_check: [],
    clicked_product: null,
  }
},
    async asyncData({ params }) {
        const product = params.category
        const slug = params.slug
        return { product, slug }
}
    }
  </script>