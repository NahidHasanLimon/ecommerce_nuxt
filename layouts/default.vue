<template>
    <div>
        <Nav/>
        <nuxt/>
    </div>
</template>
<script>
import Nav from "../components/Nav.vue";

export default{
name: 'default',
components:{
    Nav
}
}
</script>