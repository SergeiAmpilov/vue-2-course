<template>
  <div id="app">
    <h1>Parent: {{ carName }}</h1>
    <app-car
      :carName="carName"
      :carYear="carYear"
      @nameChanged="carName = $event"
      @updateCounter="counter = $event"
    ></app-car>

    <hr>
    <app-counter></app-counter>

  </div>
</template>

<script>
import Car from './Car.vue'
import Counter from './Counter.vue'


export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      carName: 'Toyota',
      carYear: 2003,
    }
  },
  components: {
    appCar: Car,
    appCounter: Counter,
  }
}
</script>

<style>

</style>
