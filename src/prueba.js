const segmentos = []
const casilla = [
  [504, 452],
  [467, 479],
  [557, 539],
  [543, 550]
]

const distancia = (punto1, punto2) => {
  const distanciaX = casilla[punto1][0] - casilla[punto2][0]
  const distanciaY = casilla[punto1][1] - casilla[punto2][1]
  const distancia = Math.pow(distanciaX, 2) + Math.pow(distanciaY, 2)
  console.log(`Punto 1 ${casilla[punto1]}`)
  console.log(`Punto 2 ${casilla[punto2]}`)
  console.log(`Distancia ${distancia}`)
  return distancia
}

for (let i = 0; i < 4; i += 1) {
  for (let j = i + 1; j < 4; j++) {
    segmentos.push(distancia(i, j))
  }
}

segmentos.sort((a, b) => a - b)
console.log(segmentos)
