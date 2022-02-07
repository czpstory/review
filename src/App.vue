<template>
  <div>
    <h1>{{ $store.state.name }}</h1>
    <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>
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

<style scoped></style>
