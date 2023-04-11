<script lang="ts" name="RootLayout">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'RootLayout',
  setup() {
    const route = useRoute()

    const layout = computed(() => {
      const layout = route?.meta?.layout

      if (layout) {
        return layout
      }

      return 'ProtectedLayout'
    })

    console.log(layout.value)

    return { layout }
  }
})
</script>

<template>
  <component :is="layout">
    <router-view v-slot="{ Component, route }">
      <transition name="page">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </component>
</template>

<style lang="css">
.page-enter-active,
.page-leave-active {
  transition: opacity 50ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
