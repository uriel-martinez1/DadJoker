<template>
  <!--This is where the joke is extracted in and shown on page-->
  <div>
    <h1>{{ joke }}</h1>
  </div>
</template>

<script>
  import jokeService from '../services/jokeService';

  export default {
    data() {
      return {
        joke: ''
      }
    },
    // This is where we are parsing the JSON
    created() {
      jokeService.getRandomJoke()
      .then((response) => {
        console.log(response);
        this.joke = response.data;
      })
    }
  }
</script>