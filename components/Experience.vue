<template lang="html">
  <div class="card mb-3" :class="{ 'border-primary': first }">
    <div class="card-body">
      <h3 class="h5 card-title">{{ experience.name }}</h3>
      <p class="card-subtitle mb-2 text-muted">
        <a class="font-weight-bold" :href="experience.url" target="_blank">{{ experience.company }}</a>
        <small>{{ date(experience.start) }} - {{ date(experience.end) }} ({{ difference(experience.start, experience.end) + 1 }} mois)</small>
      </p>
      <p class="card-text">
        <span class="badge mr-1" :class="technology.badge" v-for="(technology, index) in experience.technologies" :key="index">
          {{ technology.name }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    experience: {
      type: Object,
      required: true
    },
    first: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    date (date) {
      return date ? moment(date).format('YYYY-MM') : 'aujourd\'hui'
    },
    difference (start, end) {
      return moment(end ? end : undefined).diff(moment(start), 'months')
    }
  }
}
</script>
