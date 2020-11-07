import {
  modalRoot,
  modalTitulo,
  modalContenido,
  modalEnviar,
  modalOverlay,
  modalClose,
  body
} from './interfaz'

export const openModal = (titulo: string, contenido: Node, enviar: Function) => {
  if (!modalRoot || !body || !modalTitulo || !modalContenido || !modalEnviar) {
    throw new Error('No hay modal')
  }

  console.log('Abierto modal', titulo)
  modalRoot.classList.remove('opacity-0')
  modalRoot.classList.remove('pointer-events-none')
  body.classList.add('modal-active')

  modalTitulo.innerHTML = titulo
  modalContenido.innerHTML = ''
  modalContenido.appendChild(contenido)
  modalEnviar.onclick = event => enviar(event)

  modalOverlay?.addEventListener('click', closeModal)

  for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener('click', closeModal)
  }

  document.onkeydown = (evt: KeyboardEvent) => {
    let isEscape = false
    if ('key' in evt) {
      isEscape = (evt.key === 'Escape' || evt.key === 'Esc')
    }
    if (isEscape && document.body.classList.contains('modal-active')) {
      closeModal()
    }
  }
}

export const closeModal = () => {
  if (!modalRoot || !body || !modalTitulo || !modalContenido || !modalEnviar) {
    throw new Error('No hay modal')
  }

  console.log('Cerrado modal')
  modalRoot.classList.add('opacity-0')
  modalRoot.classList.add('pointer-events-none')
  body.classList.remove('modal-active')
}
