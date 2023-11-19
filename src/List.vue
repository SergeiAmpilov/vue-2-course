<template>
  <div>
    <h1>List</h1>
    <input type="text" v-model.lazy="searchname">
    <ul>
      <li v-for="name of filteredNames">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
import ListMixin from './ListMixin';
export default {
  mixins: [ListMixin]
}
</script>
