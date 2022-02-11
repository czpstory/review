<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
  components: {}
})
</script>

<style scoped lang="less">
.app {
  height: 100%;
}
</style>
