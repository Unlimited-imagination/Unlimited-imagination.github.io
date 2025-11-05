<template>
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" :style="{'background-image': 'url('+imgUrl+')', 'background-size': 'cover','background-blend-mode': 'lighten','background-size':'30%', 'background-repeat':'no-repeat','background-attachment':'fixed','background-position':'center'}">
        <nav class="bg-white shadow-lg">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex flex-col justify-items-center items-center">
                        <h2 class="text-xl font-bold text-indigo-600">UI</h2>
                        <small class="ml-1 text-gray-500 font-medium text-[8px]">Unlimited Imagination</small>
                    </div>
                    <div class="flex items-center space-x-4">
                        <router-link to="/"
                            class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Home</router-link>
                        <router-link to="/robot"
                            class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Robot</router-link>
                        <router-link to="/homemanager"
                            class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Home Manager</router-link>
                        <router-link to="/about"
                            class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">About</router-link>
                        <a class="ml-2 inline-block bg-purple-600 text-white px-3 py-1 rounded"
                            href="https://github.com/Unlimited-Imagination" target="_blank" rel="noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
        </nav>
        <slot></slot>
        <footer class="bg-gray-800 text-white mt-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div class="text-center">
                    <p class="text-gray-400">&copy; 2025 Unlimited Imagination. Dream it, Build it, Deploy it!.</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
const imgUrl = new URL('../../public/logoBG.png', import.meta.url).href;
</script>
