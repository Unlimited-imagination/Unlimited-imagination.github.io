<template>
  <section class="prose max-w-none">
    <h1>Welcome to Unlimited‑Imagination</h1>
    <p>
      We build fun, practical projects to learn and to make life easier. Below are two projects that are currently active:
    </p>

    <div class="grid gap-6 md:grid-cols-2 mt-6">
      <div class="p-6 rounded-lg bg-white shadow">
        <h2 class="text-lg font-semibold">Project Robot</h2>
        <p class="text-sm text-gray-600">Create a robot from scratch — hardware & software exploration.</p>
        <router-link class="mt-4 inline-block text-purple-600 hover:underline" :to="{ name: 'Project', params: { id: 'robot' } }">Open Project Robot →</router-link>
      </div>

      <div class="p-6 rounded-lg bg-white shadow">
        <h2 class="text-lg font-semibold">Project HomeManager</h2>
        <p class="text-sm text-gray-600">Sandbox to improve development skills and to manage domestic economy.</p>
        <router-link class="mt-4 inline-block text-purple-600 hover:underline" :to="{ name: 'Project', params: { id: 'homemanager' } }">Open HomeManager →</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>