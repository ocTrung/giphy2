<template>
  <div>
    <div id="nav" class="nav">
      <router-link to="/">Giphy 2</router-link>

      <nav>
        <router-link :to="{ name: 'Home' }">Trending</router-link>
      </nav>
    </div>

    <div class="nav2">
      <router-link :to="{ name: 'Home' }">#Trending</router-link> |  
      <router-link :to="{ name: 'Random' }">#Random</router-link> |
      <router-link :to="{ name: 'Mood' }">#Mood</router-link> 

    </div>

  </div>
</template>

<script>
  export default {
    
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

</style>