<template>
    <Header></Header>
    <div class="w-full flex">
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './Components/Header.vue'

    export default {
        components: {
            Header
        }
    }
</script>
