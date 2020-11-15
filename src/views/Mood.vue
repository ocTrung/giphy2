<template>
  <div>
    <span>
      <button v-on:click="loadHappy">Happy</button>
      <button v-on:click="loadPowerful">Powerful</button>
      <button v-on:click="loadPeaceful">Peaceful</button>
      <button v-on:click="loadSad">Sad</button>
      <button v-on:click="loadMad">Mad</button>
      <button v-on:click="loadScared">Scared</button>

      <GifCard v-for="gif in gifs" :key="gif.id" :gif="gif"/>

    </span>
  
  </div>
</template>

<script>
  import GifCard from '@/components/GifCard.vue';
  import GifService from '@/services/GifService.js';

  export default {
    components: {
      GifCard
    },
    data() {
      return {
        gifs: []
      }
    },
    methods: {
      loadHappy: function() {
        GifService.search("happy")
        .then(response => {
        this.gifs = response.data.data;
        })
        .catch(error => {
          console.log("There was an error:" + error.response)
        })
      },
      loadPowerful: function() {
        GifService.search("powerful")
        .then(response => {
        this.gifs = response.data.data;
        })
        .catch(error => {
          console.log("There was an error:" + error.response)
        })
      },
      loadPeaceful: function() {
        GifService.search("peaceful")
        .then(response => {
        this.gifs = response.data.data;
        })
        .catch(error => {
          console.log("There was an error:" + error.response)
        })
      },
      loadSad: function() {
        GifService.search("sad")
        .then(response => {
        this.gifs = response.data.data;
        })
        .catch(error => {
          console.log("There was an error:" + error.response)
        })
      },
      loadMad: function() {
        GifService.search("mad")
        .then(response => {
        this.gifs = response.data.data;
        })
        .catch(error => {
          console.log("There was an error:" + error.response)
        })
      },
      loadScared: function() {
        GifService.search("scared")
        .then(response => {
        this.gifs = response.data.data;
        })
        .catch(error => {
          console.log("There was an error:" + error.response)
        })
      },

    },

  }
</script>

<style lang="scss" scoped>

</style>