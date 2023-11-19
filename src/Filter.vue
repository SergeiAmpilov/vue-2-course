<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>{{ title | lowercase }}</h1>
    <h1>{{ title | uppercase }}</h1>
    <input type="text" v-model.lazy="searchname">
    <ul>
      <li v-for="name of filteredNames">{{ name }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      title: 'Hello Vue',
      searchname: '',
      names: ['Vika', 'Andrei', 'Popkova', 'a4']
    }
  },
  computed: {
    filteredNames: function() {
      return this.names.filter((element) => {
        return element.toLocaleLowerCase().indexOf(this.searchname.toLowerCase()) !== -1;
      })
    },
  },
  filters: {
    lowercase: function(value) {
      return value.toLowerCase();
    },
  },
}
</script>


