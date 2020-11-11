/* eslint camelcase: 0 */

/* Es necesario ignorar el warning de camelcase porque los valores
 * porque son los valores que vienen desde el API
 */

const PLAYER_KEY_KEY = 'playerKey'

const storePlayerKey = (key:string) => localStorage.setItem(PLAYER_KEY_KEY, key)

const retrievePlayerKey = () => localStorage.getItem(PLAYER_KEY_KEY)

type APIError = {
  error: boolean
  mensaje: string
}

type ListadoJuegosPublicos = {
  [key:string]: {
    jugadores: number
    posiciones: number
  }
}

type LlaveJugador = {
  success: boolean
  key: string
}

type Ficha = {
  posicion: number
  encarcelada: boolean
  coronada: boolean
  recta_final: boolean
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
  dado1?: number
  dado2?: number
  pares?: number
  lanzado: boolean
  valor_original_dado1?: number
  valor_original_dado2?: number
  intentos: number
}

class Juego {
  id: string
  tablero?: Tablero
  jugadores?: Jugador[]
  finalizado?: boolean
  inicio?: Date
  turno?: Turno
  ultimo_turno?: Date

  constructor (id: string) {
    this.id = id
  }

  asignarValores (valores:any) {
    this.tablero = valores.tablero
    this.finalizado = valores.finalizado
    this.inicio = valores.inicio
    this.ultimo_turno = valores.ultimo_turno
    this.turno = valores.turno
    this.jugadores = valores.jugadores
  }
}

const serverUrl = 'https://parques-api.herokuapp.com'

export default {
  async juegosPublicos ():Promise<APIError|ListadoJuegosPublicos> {
    try {
      const response = await fetch(`${serverUrl}/juegos`)
      return await response.json()
    } catch (error) {
      if (error?.data?.mensaje) {
        return error
      }

      return { error: true, mensaje: JSON.stringify(error.message) }
    }
  },

  async crearPartida (jugadores = 4, publico = true):Promise<APIError|Juego> {
    try {
      const url = new URL(`${serverUrl}/juegos/crear_partida`)

      const params:{[key:string]: string} = {
        jugadores: JSON.stringify(jugadores),
        publico: JSON.stringify(publico)
      }

      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

      const response = await fetch(url.toString())
      const respuesta = await response.json()
      const juego = new Juego(respuesta.id)
      juego.asignarValores(respuesta)
      return juego
    } catch (error) {
      if (error?.data?.mensaje) {
        return error
      }

      return { error: true, mensaje: JSON.stringify(error.message) }
    }
  },

  async infoJuego (idJuego:string):Promise<APIError|Juego> {
    try {
      const response = await fetch(`${serverUrl}/juegos/${idJuego}`)
      const respuesta = await response.json()
      const juego = new Juego(respuesta.id)
      juego.asignarValores(respuesta)
      return juego
    } catch (error) {
      if (error?.data?.mensaje) {
        return error
      }

      return { error: true, mensaje: JSON.stringify(error.message) }
    }
  },

  async unirse (idJuego:string):Promise<APIError|LlaveJugador> {
    try {
      const response = await fetch(`${serverUrl}/juegos/${idJuego}/unirse`)
      const respuesta = await response.json()
      if (!respuesta.key) {
        return { error: true, mensaje: 'No se retornó llave del jugador' }
      }
      storePlayerKey(respuesta.key)
      return respuesta
    } catch (error) {
      if (error?.data?.mensaje) {
        return error
      }

      return { error: true, mensaje: JSON.stringify(error.message) }
    }
  },

  async iniciar (idJuego:string):Promise<APIError|Juego> {
    try {
      const playerKey = retrievePlayerKey()
      if (!playerKey) {
        return { error: true, mensaje: 'No hay llave del jugador almacenada' }
      }
      const headers = [['player-key', playerKey]]
      const response = await fetch(`${serverUrl}/juegos/${idJuego}/iniciar`,
        { headers })
      const respuesta = await response.json()
      const juego = new Juego(respuesta.id)
      juego.asignarValores(respuesta)
      return juego
    } catch (error) {
      if (error?.data?.mensaje) {
        return error
      }

      return { error: true, mensaje: JSON.stringify(error.message) }
    }
  },

  async lanzar (idJuego:string):Promise<APIError|Juego> {
    try {
      const playerKey = retrievePlayerKey()
      if (!playerKey) {
        return { error: true, mensaje: 'No hay llave del jugador almacenada' }
      }
      const headers = [['player-key', playerKey]]
      const response = await fetch(`${serverUrl}/juegos/${idJuego}/lanzar_dado`,
        { headers })
      const respuesta = await response.json()
      const juego = new Juego(respuesta.id)
      juego.asignarValores(respuesta)
      return juego
    } catch (error) {
      if (error?.data?.mensaje) {
        return error
      }

      return { error: true, mensaje: JSON.stringify(error.message) }
    }
  },

  async mover (idJuego:string, ficha:number, cantidad:number):Promise<APIError|Juego> {
    try {
      const playerKey = retrievePlayerKey()
      if (!playerKey) {
        return { error: true, mensaje: 'No hay llave del jugador almacenada' }
      }
      const headers = [['player-key', playerKey]]
      const url = new URL(`${serverUrl}/juegos/${idJuego}/mover_ficha`)

      const params:{[key:string]: string} = {
        ficha: JSON.stringify(ficha),
        cantidad: JSON.stringify(cantidad)
      }

      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

      const response = await fetch(url.toString(), { headers })
      const respuesta = await response.json()
      const juego = new Juego(respuesta.id)
      juego.asignarValores(respuesta)
      return juego
    } catch (error) {
      if (error?.data?.mensaje) {
        return error
      }

      return { error: true, mensaje: JSON.stringify(error.message) }
    }
  },

  async sacarDeLaCarcel (idJuego:string):Promise<APIError|Juego> {
    try {
      const playerKey = retrievePlayerKey()
      if (!playerKey) {
        return { error: true, mensaje: 'No hay llave del jugador almacenada' }
      }
      const headers = [['player-key', playerKey]]
      const response = await fetch(`${serverUrl}/juegos/${idJuego}/sacar_de_la_carcel`,
        { headers })
      const respuesta = await response.json()
      const juego = new Juego(respuesta.id)
      juego.asignarValores(respuesta)
      return juego
    } catch (error) {
      if (error?.data?.mensaje) {
        return error
      }

      return { error: true, mensaje: JSON.stringify(error.message) }
    }
  },

  async soplar (idJuego:string, ficha:number):Promise<APIError|Juego> {
    try {
      const playerKey = retrievePlayerKey()
      if (!playerKey) {
        return { error: true, mensaje: 'No hay llave del jugador almacenada' }
      }
      const url = new URL(`${serverUrl}/juegos/${idJuego}/soplar`)

      const params:{[key:string]: string} = {
        ficha: JSON.stringify(ficha)
      }

      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

      const headers = [['player-key', playerKey]]
      const response = await fetch(`${serverUrl}/juegos/${idJuego}/soplar`,
        { headers })
      const respuesta = await response.json()
      const juego = new Juego(respuesta.id)
      juego.asignarValores(respuesta)
      return juego
    } catch (error) {
      if (error?.data?.mensaje) {
        return error
      }

      return { error: true, mensaje: JSON.stringify(error.message) }
    }
  }
}
