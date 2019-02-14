<template>
  <div class="card">
    <div class="card-body">
      <h3 class="h5 card-title">{{ diploma.name }}</h3>
      <p class="card-subtitle mb-2 text-muted">
        <a class="font-weight-bold" :href="diploma.url" target="_blank">{{ diploma.school }}</a>
        <small>{{ date(diploma.start) }} - {{ date(diploma.end) }}</small>
      </p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    diploma: {
      type: Object,
      required: true
    }
  },
  methods: {
    date (date) {
      return date ? moment(date).format('YYYY-MM') : 'aujourd\'hui'
    }
  }
}
</script>
