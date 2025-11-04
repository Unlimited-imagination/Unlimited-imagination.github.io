<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-grow container mx-auto px-4 py-8">
      <router-view />
    </main>
    <footer class="bg-white border-t py-4">
      <div class="container mx-auto px-4 text-sm text-gray-600">
        © {{ new Date().getFullYear() }} Unlimited‑Imagination — Built with Vue + Tailwind
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: { NavBar }
}
</script>