<template>
  <div>
    <h1>{{ film.title }}</h1>
    <h2>Release: {{ film.release_date }}</h2>
    <h2>Director: {{ film.director }}</h2>
    <h2>Producer: {{ film.producer }}</h2>
    <h2>Rating: {{ film.rt_score }}</h2>
    <p>{{ film.description }}</p>

    <router-link to="/films">
      Back to Film List
    </router-link>
  </div>
</template>

<script>
const URL_API = 'https://ghibliapi.herokuapp.com/films'

export default {
  name: 'FilmDetail',
  data () {
    return {
      film: {
        title: ''
      }
    }
  },
  mounted () {
    const filmId = this.getParamsId()
    fetch(`${URL_API}/${filmId}`)
      .then(res => res.json())
      .then(data => {
        this.film = data
      })
  },
  methods: {
    getParamsId () {
      return this.$route.params.id
    }
  }
}
</script>

<style lang="less" scoped>
</style>
