<template>
  <div>
      <input type="text" value="type here" v-model="query">
      <button v-on:click="search">Search</button>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        query: "Type your search here"
      }
    },
    methods: {
      search: function() {
        this.$router.push({ name: 'SearchResult', params: { query: this.query } })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>