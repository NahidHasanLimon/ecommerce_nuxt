<template>
    <div>
        <h1>{{ product }} / {{ slug }}</h1>
    </div>
</template>
<script>
    export default {
      async asyncData({ params }) {
        const product = params.product
        const slug = params.slug
        return { product, slug }
      }
    }
  </script>