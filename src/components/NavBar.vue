<template>
  <div>
    <div id="nav">
      <router-link to="/" class="brand">
        <img class="logo" v-bind:src="logo" alt="Welcome to Giphy">
      </router-link>
    </div>

    <div class="nav2">
      <router-link :to="{ name: 'Home' }">Trending</router-link> |  
      <router-link :to="{ name: 'Random' }">Random</router-link> |
      <router-link :to="{ name: 'Mood' }">Mood</router-link> 

    </div>

  </div>
</template>

<script>
  import GifService from '@/services/GifService.js';

  export default {
    data() {
      return {
        logos: [],
        logo: String
      }
    },
    created() {
      GifService.getLogo()
        .then(response => {
          this.logos = response.data.data
          let index = Math.floor(Math.random() * 50)
          this.logo = this.logos[index].images.original.url
        })
        .catch(error => {
          console.log("There was an error:" + error.response)
        })

      console.log("random num: " + Math.floor(Math.random() * 20))
    }
  }
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav > .brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
.nav2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.logo {
  width: 200px;
}
a {
  color: rgb(230, 207, 0);
}

</style>