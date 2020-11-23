<template>
  <div class='container w-75 m-auto'>
    <h1 class='w-full text-center text-3xl leading-9 font-extrabold
               my-6 text-gray-700'>
      Listar partidas públicas
    </h1>
    <div class="w-full mt-2">
      <table class="table-auto m-auto">
        <thead>
          <tr>
            <th class='bg-blue-100 border text-left px-8 py-4'>ID</th>
            <th class='bg-blue-100 border text-left px-8 py-4'>Inscr/Posic</th>
            <th class='bg-blue-100 border text-left px-8 py-4'>Creado</th>
            <th class='bg-blue-100 border text-left px-8 py-4'>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class='w-full'
            :key='juego[0]'
            v-for='juego in juegosOrdenados'
          >
            <td class="whitespace-no-wrap border px-8 py-2">
              {{ juego[0] }}
            </td>
            <td class="whitespace-no-wrap border px-8 py-2">
              {{ juegos[juego[0]].jugadores }}/{{ juegos[juego[0]].posiciones }}
            </td>
            <td class="whitespace-no-wrap border px-8 py-2">
              {{ timeago(juego[1] * 1000) }}
            </td>
            <td class="text-center border px-8 py-2">
              <button
                class='bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 m-2 rounded'
                @click="unirse(juego[0])">
                Unirse
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { timeago } from '../dateHelpers'
import api, { APIError, ListadoJuegosPublicos } from '../api'

// type guard functions
function isAPIError (response: APIError | ListadoJuegosPublicos): response is APIError {
  return (typeof response.mensaje === 'string')
}

export default defineComponent({
  data () {
    const juegos:ListadoJuegosPublicos = {}
    const juegosOrdenados:[string, number][] = []
    return {
      juegos,
      juegosOrdenados
    }
  },
  mounted: async function () {
    const juegos = await api.juegosPublicos()
    if (isAPIError(juegos)) {
      console.error(juegos.mensaje)
      // To do: mostrar error al usuario
      return
    }

    this.juegos = juegos
    const juegosOrdenados:[string, number][] = []
    Object.keys(juegos).forEach((juegoId:string) => {
      const juego = juegos[juegoId]
      juegosOrdenados.push([juegoId, juego.created_at])
    })

    this.juegosOrdenados = juegosOrdenados.sort((elemento1, elemento2) => elemento2[1] - elemento1[1])
  },
  methods: {
    timeago,
    unirse (id:number) {
      // To do
      console.log(id)
    }
  }
})
</script>
