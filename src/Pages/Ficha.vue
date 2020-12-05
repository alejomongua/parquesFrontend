<template>
  <circle
    :cx='posicionX'
    :cy='posicionY'
    :fill='color'
    stroke-width='2'
    stroke='black'
    r='10'
  />
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['color', 'posicionX', 'posicionY'],
})
</script>
