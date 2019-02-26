<template>
  <ul class="list-group list-group-flush">
    <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(item, index) in items" :key="index">
      <a :href="item.url" target="_blank">
        {{ item.name }}
      </a>
      <a :href="item.github" target="_blank">
        <font-awesome-icon icon="code-branch"/>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
