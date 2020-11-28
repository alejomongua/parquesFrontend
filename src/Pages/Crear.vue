<template>
  <h1 class='w-full text-center text-3xl leading-9 font-extrabold
              my-6 text-gray-700'>
    Crear una nueva partida
  </h1>
  <div class='w-1/2 m-auto p-2 rounded-md border'>
    <label class='block'>
      <span class="text-gray-700">Visibilidad</span>
      <select
        class='form-select mt-1 block w-full p-2 rounded-md bg-gray-200 border'
        v-model='visibilidadPublica'
      >
        <option value='true'>Pública</option>
        <option value='false'>Privada</option>
      </select>
    </label>
    <label class='block'>
      <span class="text-gray-700">Cantidad de posiciones de este tablero</span>
      <select
        class='form-select mt-1 block w-full p-2 rounded-md bg-gray-200 border'
        v-model='posiciones'
      >
        <option
          v-for='index in 5'
          :key='index'
          :value='index + 3'
        >
          {{index + 3}}
        </option>
      </select>
    </label>
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
        @click="crear"
        :disabled='noHayNickname'
      >
        Crear una nueva partída
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { COLORES } from '../constants'

export default defineComponent({
  data () {
    const color = COLORES[0][0]
    const posiciones = 4
    const visibilidadPublica:boolean = true
    const nickname:string = ''
    return {
      posiciones,
      color,
      visibilidadPublica,
      nickname,
      COLORES: COLORES.map(color => color[0])
    }
  },
  computed: {
    noHayNickname ():boolean {
      return this.nickname === ''
    }
  },
  methods: {
    crear () {
      // To do
      const opciones = {
        publica: this.visibilidadPublica,
        jugadores: this.posiciones
      }
      const jugador = {
        color: this.color,
        nickname: this.nickname
      }
      console.log('Crear partida', opciones, jugador)
    }
  }
})
</script>
