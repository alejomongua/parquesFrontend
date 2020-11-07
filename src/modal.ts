import {
  modalRoot,
  modalTitulo,
  modalContenido,
  modalEnviar,
  body
} from './interfaz'

export default (titulo: string, contenido: Node, enviar: Function) => {
  if (!modalRoot || !body || !modalTitulo || !modalContenido || !modalEnviar) {
    throw new Error('No hay modal')
  }

  console.log('Abierto modal', titulo)
  modalRoot.classList.toggle('opacity-0')
  modalRoot.classList.toggle('pointer-events-none')
  body.classList.toggle('modal-active')

  modalTitulo.innerHTML = titulo
  modalContenido.appendChild(contenido)
  modalEnviar.onclick = event => enviar(event)
}
