<template>
  <div>
    <h1 class="msg">{{ msg }}</h1>
    <p>
      A project setup using vue-cli, created to easily scaffold new Vue.js projects.
      <br />
      Find out more at
      <a class="custom" href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>
      .
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HelloWorld'
}
</script>

<script setup lang="ts">
defineProps({
  msg: {
    type: String,
    default: ''
  }
})
</script>
