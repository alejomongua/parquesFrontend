import { createStore } from 'vuex'

export interface State {
  errores: string[]
}

export const store = createStore({
  state ():State {
    return {
      errores: []
    }
  },
  mutations: {
    agregarError (state:State, payload:string) {
      state.errores.push(payload)
    },
    eliminarError (state:State, payload:string) {
      state.errores = state.errores.filter((error:string) => error !== payload)
    }
  }
})
