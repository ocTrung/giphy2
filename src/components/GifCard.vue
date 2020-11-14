<template>
  <router-link :to="{ name: 'gif-show', params: { id: gif.id } }">
    <div>

      <!-- <h4>{{ gif.url }}</h4> -->
      <img :src=gif.images.original.url>
      
    </div>
  </router-link>
</template>

<script>
  export default {
    props: {
      gif: Object
    }
  }
</script>

<style lang="scss" scoped>

</style>