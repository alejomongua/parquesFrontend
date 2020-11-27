<template>
  <div class='w-1/2 m-auto relative'>
    <img :src='tablero' class='absolute'/>
    <svg class="absolute tablero border">
        <circle
            class='bg-black'
            v-for='posicion in tablero4posiciones.principal'
            :key='JSON.stringify(posicion)'
            :cx='averageX(posicion)'
            :cy='averageY(posicion)'
            r='15' />
    </svg>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import tablero from '../../assets/t4p.png'
import { tablero4posiciones } from '../casillas'

export default defineComponent({
  data () {
    return {
      tablero,
      tablero4posiciones
    }
  },
  methods: {
    averageX (posicion:number[][]) {
      let sum = 0
      for (let i = 0; i < posicion.length; i += 1) {
        sum += posicion[i][0]
      }
      return sum / posicion.length
    },
    averageY (posicion:number[][]) {
      let sum = 0
      for (let i = 0; i < posicion.length; i += 1) {
        sum += posicion[i][1]
      }
      return sum / posicion.length
    }
  }
})
</script>
