<template>
  <div>
    <div class="moods">
      <button class="button happy" v-on:click="loadHappy">Happy 😄</button>
      <button class="button peaceful" v-on:click="loadPeaceful">Peaceful 🤝</button>
      <button class="button sad" v-on:click="loadSad">Sad 😭</button>
      <button class="button mad" v-on:click="loadMad">Mad 😡</button>
      <button class="button scared" v-on:click="loadScared">Scared 😱</button>
      <button class="button bored" v-on:click="loadBored">Bored 😑</button>
    </div>

      <GifCard v-for="gif in gifs" :key="gif.id" :gif="gif"/>

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
      loadPeaceful: function() {
        GifService.search("peaceful")
        .then(response => {
        this.gifs = response.data.data;
        })
        .catch(error => {
          console.log("There was an error:" + error.response)
        })
      },
      loadBored: function() {
        GifService.search("bored")
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

<style lang="css" scoped>
.moods {
  margin-bottom: 20px;
}
.button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  /* cursor: pointer; */
  border-radius: 25px;

}

.happy {background-color: #eba800; color: black;} /* Blue */
.bored {background-color: #d74000;} /* Red */ 
.peaceful {background-color: #1bd24e; color: black;} /* Gray */ 
.sad {background-color: #3b3bdf;} /* Black */
.mad {background-color: #bf0303;}
.scared {background-color: #8500c7;}
</style>