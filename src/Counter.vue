<template>

  <h3>Counter: {{ counter }}</h3>
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
<style></style>
