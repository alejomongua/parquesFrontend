<template>
  <div
    @click="close"
    class='z-20 h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-50' />
  <div class="absolute inset-0">
    <section class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/2">
        <div class="p-2 border">
          <h1 class='text-center text-2xl font-bold'>Unirse a la partida {{ juegoId }}</h1>
          <p v-if='cargando' class="text-2xl">El juego está cargando, por favor espere...</p>
          <div v-else>
            <label class='block'>
              <span class="text-gray-700">Color de sus fichas</span>
              <select
                class='form-select mt-1 block w-full p-2 rounded-md bg-gray-200 border'
                v-model='color'
              >
                <option
                  v-for='color in COLORES'
                  :key='color'
                  :value='color'
                >
                  {{color}}
                </option>
              </select>
            </label>
            <label class='block'>
              <span class="text-gray-700">Nickname para esta partida</span>
              <input
                class='form-select mt-1 block w-full p-2 rounded-md bg-gray-200 border'
                v-model='nickname'
              />
            </label>
            <div class="w-full m-auto text-center my-4">
              <button
                class='bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 text-lg m-2 rounded disabled:bg-blue-300'
                @click="unirse"
                :disabled='noHayNickname'
              >
                Unirse a la partida
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { COLORES } from '../constants'
import api, { isAPIError } from '../api'

export default defineComponent({
  emits: ['close'],
  props: ['juegoId'],
  data () {
    const color = COLORES[0][0]
    const nickname:string = ''
    const cargando = false
    return {
      color,
      nickname,
      COLORES: COLORES.map(color => color[0]),
      cargando,
    }
  },
  computed: {
    noHayNickname ():boolean {
      return this.nickname === ''
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    async unirse () {
      this.cargando = true
      const llaveJugador = await api.unirse(this.$props.juegoId, this.color, this.nickname)
      if (isAPIError(llaveJugador)) {
        console.error('Hubo un error:', llaveJugador.mensaje)
        return
      }

      this.$router.push(`/juego/${this.$props.juegoId}`)
    }
  }

})
</script>
