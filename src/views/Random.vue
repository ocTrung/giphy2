<template>
  <div>
     <button class="button" v-on:click="randomButton">Another one!</button>
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
    methods: {
      randomButton: function() {
        console.log("random button pressed")

        GifService.getRandom(this.id)
        .then(response => {
          this.gif = response.data.data
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
      },
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

<style lang="css" scoped>
  .random {
  width: 25%;
  }
  button {
    margin-bottom: 10px;
  }
  h4 {
  color: white;
  }
  p {
    color: white;
  }
  .button {
  /* border: none; */
  background-color: rgb(230, 17, 116);
  padding: 15px 32px;
  text-align: center;
  /* text-decoration: none; */
  display: inline-block;
  font-size: 16px;
  /* margin: 4px 2px; */
  /* cursor: pointer; */
  border-radius: 25px;
  font-weight: bold;
}
</style>