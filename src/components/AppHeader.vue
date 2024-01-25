<template>
    <div class="logo">
      <!--Logo goes here-->
    </div>

    <div>
      <h1>{{ msg }}</h1>
      <h2>Where dad jokes come alive!</h2>
      <p>Click button to see a new dad joke.</p>
    </div>
  
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
