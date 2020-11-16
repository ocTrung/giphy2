<template>
  <div>
    <div>
      <img :src=gif.images.original.url>
    </div>
    <div>
      <h4>Title: {{ gif.title }} </h4>
      <p>Short url: {{ gif.bitly_url }} </p>
      <p>Embed url: {{ gif.embed_url }} </p>
    
    </div>

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
      GifService.getGif(this.id)
        .then(response => {
          this.gif = response.data.data
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  }
</script>

<style lang="css" scoped>
h4 {
  color: white;
}
p {
  color: white;
}
</style>