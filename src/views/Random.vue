<template>
  <div>
    <img :src=gif.images.original.url>
    <h4>Title: {{ gif.title }} </h4>

  </div>
</template>

<script>
  import GifService from '@/services/GifService.js';

  export default {
    props: ['id'],
    data() {
      return {
        gif: {}
      }
    },
    created() {
      GifService.getRandom(this.id)
        .then(response => {
          this.gif = response.data.data
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  }
</script>

<style lang="scss" scoped>

</style>