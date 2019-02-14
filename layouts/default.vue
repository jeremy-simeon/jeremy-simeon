<template>
  <div class="min-vh-100 d-flex flex-column">
    <header>
      <header class="navbar navbar-expand-lg navbar-dark bg-dark">
        <nuxt-link class="navbar-brand" :to="{ name: 'index' }">JS</nuxt-link>
      </header>
    </header>
    <main class="container-fluid p-3 d-flex flex-grow-1">
      <nuxt/>
    </main>
    <footer class="w-100 bg-light">
      <div class="footer-copyright text-center py-3">
        En construction
      </div>
    </footer>
  </div>
</template>
