import './main.css'
import { botonListarPartidasPublicas } from './interfaz'
import { openModal } from './modal'
import api from './api'

function main () {
  if (!botonListarPartidasPublicas) {
    return
  }
  botonListarPartidasPublicas.onclick = async () => {
    const juegos = await api.juegosPublicos()
    if (juegos.error && typeof juegos.mensaje === 'string') {
      const nodo = document.createElement('div')
      nodo.innerText = juegos.mensaje
      openModal('Error trayendo listado', nodo)
      return
    }

    const table = document.createElement('table')
    const tbody = document.createElement('tbody')
    Object.keys(juegos).forEach((juegoId:string) => {
      const tr = document.createElement('tr')

      const data = juegos[juegoId]
      const tdJugadores = document.createElement('td')
      tdJugadores.innerHTML = `${data.jugadores} / ${data.posiciones}`
      const tdCreacion = document.createElement('td')
      tdCreacion.innerHTML = (new Date(data.created_at)).toString()
      const tdAcciones = document.createElement('td')
      const botonUnirse = document.createElement('button')
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
