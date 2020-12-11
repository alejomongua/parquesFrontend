<template>
  <Header></Header>
  <div class="w-full">
    <router-view></router-view>
  </div>
  <Errors />
</template>

<script lang="ts">
import Header from './Components/Header.vue'
import Errors from './Components/Errors.vue'

import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Header,
    Errors
  }
})
</script>
