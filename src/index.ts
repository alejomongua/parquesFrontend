import './main.css'
import { botonListarPartidasPublicas } from './interfaz'
import { openModal } from './modal'
import api from './api'

function main () {
  if (!botonListarPartidasPublicas) {
    return
  }
  botonListarPartidasPublicas.onclick = async () => {
    const nodo = document.createElement('div')
    const juegos = await api.juegosPublicos()
    if (juegos.error && typeof juegos.mensaje === 'string') {
      nodo.innerText = juegos.mensaje
      openModal('Error trayendo listado', nodo)
      return
    }

    nodo.innerText += Object.keys(juegos).join(' | ')
    openModal('Listado de juegos públicos', nodo)
  }
}

main()
