<template>
  <div class='w-1/2 m-auto relative'>
    <img :src='tablero' class='absolute'/>
    <svg class="absolute tablero border">
        <circle
            class='bg-black'
            v-for='(posicion, indice) in tablero4posiciones.principal'
            :key='indice'
            :cx='average(posicion, 0)'
            :cy='average(posicion, 1)'
            r='10' />
        <g
          v-for='(casillas, indice) in tablero4posiciones.carceles'
          :key='JSON.stringify(indice)'
          :fill='COLORES[indice][1]'
          stroke-width='2'
          stroke='black'
          >
          <circle
            v-for='(posicion, indice) in casillas'
            :key='indice'
            :cx='posicion[0]'
            :cy='posicion[1]'
            r='10'
          />
        </g>
        <g
          v-for='(casillas, indice) in tablero4posiciones.llegadas'
          :key='indice'
          :fill='COLORES[indice][1]'
          stroke-width='2'
          stroke='black'
          >
          <circle
            v-for='(posicion, indice) in casillas'
            :key='indice'
            :cx='average(posicion, 0)'
            :cy='average(posicion, 1)'
            r='10'
          />
        </g>
    </svg>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import tablero from '../../assets/t4p.png'
import { tablero4posiciones } from '../casillas'
import { COLORES } from '../constants'

export default defineComponent({
  data () {
    return {
      tablero,
      COLORES,
      tablero4posiciones
    }
  },
  methods: {
    average (posicion:number[][], xOrY:number) {
      let sum = 0
      posicion.forEach(pos => { sum += pos[xOrY] })
      return sum / posicion.length
    },
  }
})
</script>
