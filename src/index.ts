import './main.css'
import { botonListarPartidasPublicas } from './interfaz'
import { openModal } from './modal'
import api, { APIError, ListadoJuegosPublicos } from './api'
import timeago from './timeago'

// type guard functions
function isAPIError (response: APIError | ListadoJuegosPublicos): response is APIError {
  return (typeof response.mensaje === 'string')
}

function main () {
  if (!botonListarPartidasPublicas) {
    return
  }
  botonListarPartidasPublicas.onclick = async () => {
    const juegos = await api.juegosPublicos()
    if (isAPIError(juegos)) {
      const nodo = document.createElement('div')
      nodo.innerText = juegos.mensaje
      openModal('Error trayendo listado', nodo)
      return
    }

    let juegosOrdenados:[string, number][] = []
    Object.keys(juegos).forEach((juegoId:string) => {
      const juego = juegos[juegoId]
      juegosOrdenados.push([juegoId, juego.created_at])
    })

    juegosOrdenados = juegosOrdenados.sort((elemento1, elemento2) => elemento2[1] - elemento1[1])

    const table = document.createElement('table')
    table.classList.add('table-fixed', 'w-full')
    const tbody = document.createElement('tbody')
    juegosOrdenados.forEach((element) => {
      const data = juegos[element[0]]
      const tr = document.createElement('tr')
      const tdJugadores = document.createElement('td')
      tdJugadores.innerHTML = `${data.jugadores} / ${data.posiciones}`
      tdJugadores.classList.add('whitespace-no-wrap')
      const tdCreacion = document.createElement('td')
      tdCreacion.classList.add('whitespace-no-wrap')
      tdCreacion.innerHTML = timeago(data.created_at * 1000)
      const tdAcciones = document.createElement('td')
      tdAcciones.classList.add('text-center')
      const botonUnirse = document.createElement('button')
      botonUnirse.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'p-1', 'm-2', 'rounded')
      botonUnirse.innerHTML = 'Unirse'
      botonUnirse.onclick = () => console.log(`Unirse a ${console.log}`)
      tdAcciones.appendChild(botonUnirse)
      tr.appendChild(tdJugadores)
      tr.appendChild(tdCreacion)
      tr.appendChild(tdAcciones)
      tbody.appendChild(tr)
    })
    table.appendChild(tbody)
    openModal('Listado de juegos públicos', table)
  }
}

main()
