<template>
  <div
    @click="close"
    class='z-20 h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-50' />
  <div class="absolute inset-0">
    <section class="flex w-full">
      <div class="m-auto">
        <h1>Unirse a la partida</h1>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    close () {
      this.$emit('close')
    }
  }

})
</script>
