<template>
  <div class="min-vh-100 d-flex flex-column">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-dark bg-dark">
        <nuxt-link class="navbar-brand" :to="{ name: 'index' }">Jérémy SIMEON</nuxt-link>
      </nav>
    </header>
    <main class="main container p-3 d-flex flex-grow-1">
      <nuxt/>
    </main>
    <footer class="w-100 bg-light">
      <div class="text-center py-3">
        <a href="https://github.com/jeremy-simeon" target="_blank">GitHub</a> -
        <a href="https://fr.linkedin.com/in/jeremysimeon" target="_blank">LinkedIn</a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" src="./default.scss" scoped/>
