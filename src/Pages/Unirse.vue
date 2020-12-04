<template>
  <h1 class='w-full text-center text-3xl leading-9 font-extrabold
              my-6 text-gray-700'>
    Unirse una nueva partida
  </h1>

  <div class='w-1/2 m-auto p-2 rounded-md border'>
    <label class='block'>
      <span>Digite el código de la partida para poder unirse</span>
      <input
        class='form-select mt-1 block w-full p-2 rounded-md bg-gray-200 border'
        :value='juegoId'
        @input='updateJuegoId'
      />
    </label>
    <div class="w-full m-auto text-center my-4">
      <button
        class='bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 text-lg m-2 rounded disabled:bg-blue-300'
        @click="unirse"
        :disabled='noExisteJuego'
      >
        Unirse
      </button>
    </div>
  </div>
  <ModalUnirse v-if='isModalOpen' @close='isModalOpen = false' />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import api, { isAPIError } from '../api'
import ModalUnirse from './ModalUnirse.vue'

export default defineComponent({
  components: {
    ModalUnirse
  },
  data () {
    const juegoId = ''
    const timeoutId:number = 0
    const noExisteJuego:boolean = true
    const isModalOpen:boolean = false
    return {
      juegoId,
      timeoutId,
      noExisteJuego,
      isModalOpen,
    }
  },
  methods: {
    unirse () {
      console.log(this.juegoId)
    },
    updateJuegoId (e:Event) {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId)
      }
      if (e.target) {
        this.juegoId = (e.target as HTMLInputElement).value
        this.noExisteJuego = true
        this.timeoutId = window.setTimeout(async () => {
          const juego = await api.infoJuego(this.juegoId)
          if (isAPIError(juego)) {
            return
          }

          this.noExisteJuego = false
          this.isModalOpen = true
        }, 500)
      }
    }
  }
})
</script>
