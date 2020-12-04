<template>
  <div class='w-1/2 m-auto relative'>
    <Tablero v-if='juego' :juego='juego' />
    <p v-else class="text-2xl">El juego está cargando, por favor espere...</p>
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

export default defineComponent({
  components: {
    Tablero
  },
  data ():{
    juego: Juego | null,
    debug: boolean
    } {
    return {
      juego: null,
      debug: true,
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
  }

})
</script>
