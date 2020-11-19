<template>
  <nav
    class="w-full bg-blue-800 text-white px-4 py-5"
  >
    <router-link
      v-for='enlace in lista'
      class='p-2 font-bold'
      :to="enlace.to"
      :key="enlace.to"
    >{{ enlace.title }}</router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      lista: [
        { title: "Inicio", to: "/" },
        { title: "Crear partida", to: "/crear-partida" },
        { title: "Listar partidas públicas", to: "/listar-partidas-publicas" },
        { title: "Unirse a una partida", to: "/unirse-a-partida" },
      ],
    };
  },
}
</script>