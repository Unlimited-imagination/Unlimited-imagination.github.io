<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <img src="../assets/logo.png" alt="Unlimited Imagination Logo" class="h-12 w-12 mr-3"/>
          </div>
          <div class="flex items-center space-x-4">
            <router-link to="/" class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Home</router-link>
            <router-link to="/robot" class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Robot</router-link>
            <router-link to="/homemanager" class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">HomeManager</router-link>
            <a class="ml-2 inline-block bg-purple-600 text-white px-3 py-1 rounded" href="https://github.com/Unlimited-Imagination" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-extrabold text-gray-900 mb-4">Welcome to Unlimited Imagination</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore innovative projects that push the boundaries of technology and creativity. 
          From robotics to personal development tools, discover our journey in building the future.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <router-link to="/robot" class="group">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full">
            <div class="bg-gradient-to-r from-purple-500 to-pink-500 h-48 flex items-center justify-center">
              <svg class="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                Project Robot
              </h3>
              <p class="text-gray-600 mb-4">
                Building a robot from scratch - exploring mechanics, electronics, and AI to create an autonomous system.
              </p>
              <span class="inline-flex items-center text-purple-600 font-semibold group-hover:text-purple-700">
                Learn more
                <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </router-link>

        <router-link to="/homemanager" class="group">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full">
            <div class="bg-gradient-to-r from-green-500 to-teal-500 h-48 flex items-center justify-center">
              <svg class="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                Project Home Manager
              </h3>
              <p class="text-gray-600 mb-4">
                A sandbox for improving development skills while building a practical tool for managing domestic economy.
              </p>
              <span class="inline-flex items-center text-green-600 font-semibold group-hover:text-green-700">
                Learn more
                <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </router-link>
      </div>

      <div class="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
        <h3 class="text-3xl font-bold text-gray-900 mb-4 text-center">About Unlimited Imagination</h3>
        <p class="text-gray-600 text-lg leading-relaxed">
          Unlimited-Imagination is a space for innovative projects and creative exploration. 
          Our mission is to transform ideas into reality through technology, learning, and experimentation. 
          Each project represents a unique challenge and opportunity to grow as developers and makers.
        </p>
      </div>
    </main>

    <footer class="bg-gray-800 text-white mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="text-center">
          <p class="text-gray-400">&copy; 2025 Unlimited-Imagination. Dream it, Build it, Deploy it!.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>
