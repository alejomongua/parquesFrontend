import { createStore } from 'vuex'

export interface State {
  errores: string[],
  fichaSeleccionada: [string, number] | null,
}

export const store = createStore({
  state ():State {
    return {
      errores: [],
      fichaSeleccionada: null,
    }
  },
  mutations: {
    agregarError (state:State, payload:string) {
      state.errores.push(payload)
    },
    eliminarError (state:State, payload:string) {
      state.errores = state.errores.filter((error:string) => error !== payload)
    },
    seleccionarFicha (state:State, payload:[string, number] | null) {
      state.fichaSeleccionada = payload
    }
  }
})
