<template>
  <div>
    User {{ id }} <br>
    <router-link :to="`/user/${id - 1} `">Prev</router-link>
    <router-link :to="`/user/${id + 1} `">Next</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: 0
    }
  },
  created () {
    this.id = +this.$route.params.id
  },
  watch: {
    $route () {
      this.id = +this.$route.params.id
    }
  }
}
</script>
