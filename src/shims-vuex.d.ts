import { Store } from 'vuex'
import { State } from './store'
import { ComponentCustomProperties } from 'vue'

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
