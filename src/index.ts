import './main.css'
import { botonListarPartidasPublicas } from './interfaz'
import modal from './modal'

function main () {
  if (!botonListarPartidasPublicas) {
    return
  }
  botonListarPartidasPublicas.onclick = () => {
    const nodo = document.createElement('p')
    nodo.innerText = 'Hola mundo'
    modal('Título de prueba', nodo, (evento:Event) => console.log(evento))
  }
}

main()
