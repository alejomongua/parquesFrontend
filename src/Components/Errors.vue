<template>
  <div
    v-if='errores.length > 0'
    class="w-full md:w-1/2 lg:w-1/4 bg-gray-100 bottom-0 right-0 fixed p-4">
    <div
      v-for='(error, index) in errores'
      :key='index'
      class="cursor-pointer flex justify-between mw-full p-2 bg-red-500 m-2 rounded shadow-lg text-white"
      @click='eliminarError(error)'
    >
      <svg
        width="1.5em"
        height="1.5em"
        viewBox="0 0 16 16"
        class="bi bi-exclamation-circle"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path
          d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
      </svg>
      <span v-text='error'></span>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
  computed: mapState(['errores']),
  methods: {
    eliminarError (error:string) {
      console.log(error)
      this.$store.commit('eliminarError', error)
    }
  }
})
</script>
