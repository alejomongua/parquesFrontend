import { stringify } from "postcss"

export type APIError = {
  error: boolean
  mensaje: string
}

type Ficha = {
  posicion: number
  encarcelada: boolean
  coronada: boolean
  rectaFinal: boolean
}

type Tablero = {
  colores: (string | null)[]
}

type Jugador = {
  nickname: string
  color: string
  fichas: Ficha[]
  retirado: boolean
  finalizado: boolean
  salida: number
}

type Turno = {
  color: string
  dado1: number | null
  dado2: number | null
  pares: number | null
  lanzado: boolean
  valorOriginalDado1?: number
  valorOriginalDado2?: number
  intentos: number
}

class Juego {
  id: string
  tablero: Tablero
  jugadores: Jugador[]
  finalizado: boolean
  inicio: Date
  turno: Turno
  ultimo_turno: Date

  constructor (id: string) {
    this.id = id
  }

  lanzarDados () {

  }

  mover (ficha: number) {

  }

  sacarDeLaCarcel () {

  }

  soplar (ficha: number) {
    
  }
}

const serverUrl = 'https://parques-api.heroku.app'

export default {
  async juegosPublicos ():Promise<APIError|Juego> {
    try {
      const response = await fetch(`${serverUrl}/juegos`)
      return response.json()
    } catch (error) {
      if (error?.data?.mensaje) {
        return error
      }

      return { error: true, mensaje: JSON.stringify(error) }
    }
    
  }

  async crearPartida ():Promise<APIError|Juego> {
    try {
      const response = await fetch(`${serverUrl}/juegos/crear_partida`)
      return response.json()
    } catch (error) {
      if (error?.data?.mensaje) {
        return error
      }

      return { error: true, mensaje: JSON.stringify(error) }
    }
  }

  infoJuego: (idJuego:string) => `/juegos/${idJuego}`,
  unirse: (idJuego:string) => `/juegos/${idJuego}/unirse`,
  iniciar: (idJuego:string) => `/juegos/${idJuego}/iniciar`,
  lanzar: (idJuego:string) => `/juegos/${idJuego}/lanzar_dado`,
  mover: (idJuego:string) => `/juegos/${idJuego}/mover_ficha`,
  sacarDeLaCarcel: (idJuego:string) => `/juegos/${idJuego}/sacar_de_la_carcel`,
  soplar: (idJuego:string) => `/juegos/${idJuego}/soplar`,
}
