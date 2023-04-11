<template>
  <div class="w-full min-h-screen flex flex-col items-center justify-center text-center space-y-2">
    <img alt="Vue logo" :src="Logo" class="text-center" />
    <hello-world msg="Welcome to Vue.js 3 Vite starter template" />
  </div>
</template>
<script setup lang="ts" name="Home">
import HelloWorld from '~/components/HelloWorld.vue'
import Logo from '~/assets/logo.png'
</script>
