<template>
  <header class="bg-white shadow">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <svg class="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2L20 8v8l-8 6-8-6V8z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div>
          <div class="font-semibold text-lg">Unlimited‑Imagination</div>
          <div class="text-xs text-gray-500">Creativity, code & automation</div>
        </div>
      </div>
      <nav class="space-x-4">
        <router-link to="/" class="text-gray-700 hover:text-purple-600">Home</router-link>
        <router-link :to="{ name: 'Project', params: { id: 'robot' } }" class="text-gray-700 hover:text-purple-600">Project Robot</router-link>
        <router-link :to="{ name: 'Project', params: { id: 'homemanager' } }" class="text-gray-700 hover:text-purple-600">Project HomeManager</router-link>
        <a class="ml-2 inline-block bg-purple-600 text-white px-3 py-1 rounded" href="https://github.com/Unlimited-Imagination" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>