<template>
  <div>
    <h1 v-colored:color="'green'">{{ title }}</h1>
    <p v-colored:background="'yellow'">Lorem ipsum dolor sit.</p>
    <slot name="title"></slot>
    <hr>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: 'My first title'
    }
  }

}
</script>
