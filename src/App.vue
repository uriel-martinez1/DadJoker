<template>
  <header>
    <div class="wrapper">
      <AppHeader v-bind:msg="message" />
    </div>
  </header>

  <main>
    <JokeResult />
    <!--Refresh the page-->
    <button type="button" onclick="document.location.reload()">New Joke</button>
  </main>

  
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import JokeResult from './components/JokeResult.vue';

export default {
  components: {
    AppHeader,
    JokeResult
},
  data() {
    return {
      message: 'Dad Joke Generator'
    }
  },
}

</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

}
</style>
