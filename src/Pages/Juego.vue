<template>
  <div class='w-1/2 m-auto relative'>
    <Tablero v-if='juego' :juego='juego' />
    <p v-else class="text-2xl">El juego está cargando, por favor espere...</p>
  </div>
  <div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 text-lg m-2 rounded disabled:bg-blue-300"
      @click="lanzar">
      <Dados /> Lanzar los dados
    </button>
  </div>
  <pre
    v-if='juego && debug'
    class='bg-gray-200 border rounded w-3/4 m-auto mt-4 p-4 text-xs'
    v-html='JSON.stringify(juego, null, 2)' />
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import api, { isAPIError, Juego } from '../api'
import Tablero from './Tablero.vue'
import Dados from './DadosIcon.vue'

export default defineComponent({
  components: {
    Tablero,
    Dados
  },
  data ():{
    juego: Juego | null,
    debug: boolean,
    color: string,
    } {
    return {
      juego: null,
      debug: true,
      color: 'Amarillo'
    }
  },
  mounted: async function () {
    const juegoId = this.$route.params.juegoId as string

    const juego = await api.infoJuego(juegoId)
    if (isAPIError(juego)) {
      this.$router.push('/not-found')
      return
    }

    this.juego = juego
  },
  lanzar: async function () {
    if (!this.juego) {
      return
    }
    const juego = await api.lanzar(this.juego.id)
    if (isAPIError(juego)) {
      console.error(juego)
      // To do
      return
    }
    this.juego = juego
  }, /*
  computed: {
    async habilitarLanzar ():Promise<boolean> {
      if (!this.juego || !this.juego.turno) {
        return false
      }

      const micolor = await api.consultarMiColor(this.juego.id)

      if (isAPIError(micolor)) {
        return false
      }

      return this.juego.turno.color === micolor
    }
  }
*/
})
</script>
