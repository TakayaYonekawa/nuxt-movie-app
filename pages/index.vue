<template>
  <div class="flex flex-col py-10">
    <div>
      <h2 class="text-2xl font-bold text-center">Nuxt Movies App</h2>
    </div>
    <div class="flex justify-center items-center h-32">
      <input
        class="px-2 py-1 border-gray-800 rounded-md min-w-64"
        placeholder="Search..."
        type="text"
      />
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 self-center gap-x-10 gap-y-10 mb-10"
    >
      <div >
        <MovieCard ></MovieCard>
      </div>
    </div>
    <div class="flex justify-center">
      <button
        class="px-4 py-2 text-m border rounded-lg"
      >
        Previoud
      </button>
      <div class="px-4 py-2 text-m border rounded-lg"></div>
      <button

        class="px-4 py-2 text-m border rounded-lg"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
