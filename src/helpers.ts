export type Punto = [number, number]
export type Casilla = [Punto, Punto, Punto, Punto]
export type Linea = [Punto, Punto]

/*
 * Calcula la distancia euclidiana entre dos puntos,
 * recibe los dos puntos en cuestión en forma [x, y]
 * retorna el cuadrado de la distancia
 */
export const medirDistancia = (punto1:Punto, punto2:Punto) => {
  const distanciaX = punto1[0] - punto2[0]
  const distanciaY = punto1[1] - punto2[1]
  const distancia = Math.pow(distanciaX, 2) + Math.pow(distanciaY, 2)
  return distancia
}

export type Segmento = {
  d: number
  punto1: Punto
  punto2: Punto
}

/*
 * Extrae todos los segmentos de una casilla
 * Recibe el arreglo de puntos que corresponden a las esquinas
 * de una casilla
 * Retorna un arrah de objetos los puntos y las distancias
 */
export const extraerSegmentos = (casilla:Casilla):Segmento[] => {
  const segmentos = []

  for (let i = 0; i < casilla.length; i += 1) {
    for (let j = i + 1; j < casilla.length; j++) {
      const punto1 = casilla[i]
      const punto2 = casilla[j]
      segmentos.push({
        d: medirDistancia(punto1, punto2),
        punto1,
        punto2
      })
    }
  }

  segmentos.sort((a, b) => a.d - b.d)
  return segmentos
}

const puntoPromedio = (puntos:Punto[]):Punto => {
  let sumX = 0
  let sumY = 0
  puntos.forEach(punto => {
    sumX += punto[0]
    sumY += punto[1]
  })

  return [sumX / puntos.length, sumY / puntos.length]
}

export const lineaMedia = (casilla: Casilla): Linea => {
  const segmentos = extraerSegmentos(casilla)
  const punto1 = puntoPromedio([segmentos[0].punto1, segmentos[0].punto2])
  const punto2 = puntoPromedio([segmentos[1].punto1, segmentos[1].punto2])

  return [punto1, punto2]
}

export const dividirLinea = (linea: Linea, divisiones:number): Punto[] => {
  /*
   * Pendiente:
   * Función recurrente para dividir la línea en segmentos iguales
   * Para poder poner las fichas equidistantes en una casilla
   */
  const puntos:Punto[] = []

  if (divisiones < 1) {
    return puntos
  }

  puntos.push(puntoPromedio(linea))

  if (divisiones === 1) {
    return puntos
  }

  puntos.push(puntoPromedio([linea[0], puntos[0]]))
  puntos.push(puntoPromedio([linea[1], puntos[0]]))

  if (divisiones === 2) {
    // Elimine el primer punto
    puntos.shift()
    return puntos
  }

  if (divisiones === 3) {
    return puntos
  }

  if (divisiones === 4) {
    puntos.push(puntoPromedio([linea[0], puntos[1]]))
    puntos.push(puntoPromedio([puntos[1], puntos[0]]))
    puntos.push(puntoPromedio([puntos[0], puntos[2]]))
    puntos.push(puntoPromedio([puntos[2], linea[1]]))

    // Elimine los otros tres puntos
    puntos.shift()
    puntos.shift()
    puntos.shift()
    return puntos
  }

  throw Error(`No se puede dividir en ${divisiones}`)
}

export const dividirCasilla = (casilla:Casilla):Punto[] => {
  const linea = lineaMedia(casilla)
  return dividirLinea(linea, 4)
}
