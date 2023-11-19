<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>{{ title | lowercase }}</h1>
    <h1>{{ title | uppercase }}</h1>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      title: 'Hello Vue'
    }
  },
  filters: {
    lowercase: function(value) {
      return value.toLowerCase();
    },
  },
}
</script>


