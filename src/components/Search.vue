<template>
  <div>
    <div class="search">
      <form onsubmit="event.preventDefault();" role="search">
            <input type="text" name="q" v-model="query">
            <button v-on:click="search" type="submit">Go</button>   
      </form>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        query: ""
      }
    },
    computed: {
    currentRouteName() {
        return this.$route.name;
    }
    },
    methods: {
      search: function() {
        this.$router.push({ name: 'SearchResult', params: { query: this.query } })
        if (this.currentRouteName === 'SearchResult')
          this.$router.go()
      }
    }
  }
</script>

<style lang="css" scoped>
.search {
  margin-top: 15px;
  margin-bottom: 30px;
}
/* input[type=text] {
  transition: width 0.4s ease-in-out;
  background-color: #3CBC8D;
  width: 100%;
} */

input {
  width: 200px;
  height: 30px;
  font-size: 16px;
  background-color: white;
  transition: width 0.4s ease-in-out;
  border-radius: 25px;

}
button {
  height: 34px;
  width: 50px;
  text-align: center;
  border-radius: 25px;

}
</style>