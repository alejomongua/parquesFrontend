<template>
  <Header></Header>
  <div class="w-full">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Header from './Components/Header.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Header
  }
})
</script>
