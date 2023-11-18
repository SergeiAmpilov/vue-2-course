<template>

<div>
  <h3>Counter: {{ counter }}</h3>
</div>

</template>
<script>
import { eventEmitter } from './main';



export default {
  data() {
    return {
      counter: 0,
    }
  },
  props: {
    // counter: Number
  },
  created() {
    eventEmitter.$on('updateCounter', (num) => {
      this.counter += num;
    })
  }
}

</script>
<style scoped>
  div {
    padding: 10px;
    border: 1px solid blue;
  }
</style>
