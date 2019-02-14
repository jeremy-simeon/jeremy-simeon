<template>
  <p>
    <span class="badge mr-1" :class="'badge-'+color" v-for="(item, index) in items" :key="index">{{ item }}</span>
  </p>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    color: {
      type: String,
      default: 'primary'
    }
  }
}
</script>
