<template>
  <div class='container w-75 m-auto'>
    <h1 class='w-full flex text-center text-3xl leading-9 font-extrabold
               mt-6 text-gray-700'>
      Listar partidas públicas
    </h1>
    <div class="w-full flex">
      <table class="table-fixed w-full">
        <body>
          <tr
            :key='juego.id'
            v-for='juego in juegos'
          >
            <td class="whitespace-no-wrap">
              {{ juego.jugadores }}/{{ juego.posiciones }}
            </td>
            <td class="whitespace-no-wrap">
              {{ timeago(juego.created_at * 1000) }}
            </td>
            <td class="text-center">
              <button @click="unirse(juego.id)">
                Unirse
              </button>
            </td>
          </tr>
        </body>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { timeago } from '../dateHelpers'

import { defineComponent } from 'vue'
export default defineComponent({
  data () {
    return {
      juegos: [],
    }
  },
  beforeCreate () {

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
