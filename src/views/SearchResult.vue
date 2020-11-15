<template>
  <div>
    <h1></h1>
    <span>
          <GifCard v-for="gif in gifs" :key="gif.id" :gif="gif"/>
    </span>
  
  </div>
</template>

<script>
  import GifCard from '@/components/GifCard.vue';
  import GifService from '@/services/GifService.js';

  export default {
    props: ['query'],
    components: {
      GifCard
    },
    data() {
      return {
        gifs: []
      }
    },
    created() {
      GifService.search(this.query)
        .then(response => {
          this.gifs = response.data.data;
        })
        .catch(error => {
          console.log("There was an error:" + error.response)
        })
    }
  }
</script>

<style lang="scss" scoped>

</style>