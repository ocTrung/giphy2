<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
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
        gifs: [],
        moreGifs: [],
        count: 0,
        offset: 0
      }
    },
    methods: {
      loadMore: function() {
      this.busy = true;
      
      this.offset+= 10
      
      GifService.search(this.query, this.offset)
        .then(response => {
          this.moreGifs = response.data.data;
        })
        .catch(error => {
          console.log("There was an error:" + error.response)
        })
      

      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.gifs.push(this.moreGifs[i])
        }
        console.log(this.gifs.len)

        this.busy = false;
        }, 1000);
      } 
    },
    created() {
      GifService.search(this.query, 0)
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