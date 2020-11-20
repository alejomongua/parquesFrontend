<template>
    <div class="min-h-screen items-center justify-center bg-gray-50 py-12
                px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full">
            <div>
                <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold
                        text-gray-700">
                    Parqués a la colombiana
                </h2>
            </div>
            <div class="mt-6">
                <router-link
                    class="group relative w-full flex justify-center p-4 border
                           border-transparent text-lg leading-5 font-medium
                           rounded-md text-indigo-700 bg-gray-200
                           hover:bg-gray-300 focus:outline-none ease-in-out
                           focus:border-indigo-700 focus:shadow-outline-indigo
                           active:bg-indigo-700 transition duration-150"
                    to='/crear-partida'
                >
                    Crear una nueva partida
                </router-link>
            </div>

            <div class="mt-6">
                <router-link
                    class="group relative w-full flex justify-center p-4 border
                           border-transparent text-lg leading-5 font-medium
                           rounded-md text-indigo-700 bg-gray-200
                           hover:bg-gray-300 focus:outline-none ease-in-out
                           focus:border-indigo-700 focus:shadow-outline-indigo
                           active:bg-indigo-700 transition duration-150"
                    to='/listar-partidas-publicas'
                >
                    Unirse a una partida pública
                </router-link>
            </div>

            <div class="mt-6">
                <router-link
                    class="group relative w-full flex justify-center p-4 border
                           border-transparent text-lg leading-5 font-medium
                           rounded-md text-indigo-700 bg-gray-200
                           hover:bg-gray-300 focus:outline-none ease-in-out
                           focus:border-indigo-700 focus:shadow-outline-indigo
                           active:bg-indigo-700 transition duration-150"
                    to='/unirse-a-partida'
                >
                    Unirse a una partida usando un código
                </router-link>
            </div>

            <div class="mt-24">
                Creado por Alejandro Mongua
            </div>
        </div>
    </div>

</template>