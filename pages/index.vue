<template>
  <div class="flex-grow-1">
    <div class="jumbotron mb-4">
      <h1 class="display-6">Jérémy SIMÉON</h1>
      <p class="lead">
        <b>Développeur indépendant Full-Stack PHP</b> à <b>Paris</b>
        - 
        <b>Freelance</b>
      </p>
      <hr class="my-4">
      <p>
        Vous avez une question ou un projet? N'hésitez pas à me contacter par
        mail à <a href="mailto:jeremy.simeon@gmail.com">jeremy.simeon@gmail.com</a>
      </p>
    </div>
    <div class="row">
      <div class="col-md-8 mb-3 mb-md-0">
        <h2 class="h4 mb-3">Expériences professionnelles</h2>
        <experience :experience="experience" :first="index === 0" v-for="(experience, index) in $store.state.experiences" :key="index"/>
        <h2 class="h4">Diplômes</h2>
        <diploma :diploma="diploma" v-for="(diploma, index) in $store.state.diplomas" :key="index"/>
      </div>
      <div class="col-md-4">
        <div class="card mb-3">
          <h2 class="h6 card-header">Compétences techniques</h2>
          <div class="card-body">
            <h3 class="h6 card-title mb-0">Langages</h3>
            <items :items="$store.state.langages" color="primary"/>
            <h3 class="h6 card-title mb-0">Technologies</h3>
            <items :items="$store.state.frameworks" color="secondary"/>
            <h3 class="h6 card-title mb-0">Bases de données</h3>
            <items :items="$store.state.databases" color="success"/>
            <h3 class="h6 card-title mb-0">Systèmes</h3>
            <items :items="$store.state.systems" color="warning"/>
            <h3 class="h6 card-title mb-0">Logiciels</h3>
            <items :items="$store.state.softwares" color="info"/>
          </div>
        </div>
        <div class="card">
          <h2 class="h6 card-header">Compétences fonctionnelles</h2>
          <skills :items="$store.state.skills"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Experience from '@/components/Experience'
import Diploma from '@/components/Diploma'
import Skills from '@/components/Skills'
import Items from '@/components/Items'

export default {
  components: { Experience, Diploma, Items, Skills }
}
</script>
