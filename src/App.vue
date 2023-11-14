<template>
  <div id="app">
    <h1>Parent: {{ carName }}</h1>
    <app-car
      :carName="carName"
      :carYear="carYear"
      @nameChanged="carName = $event"
    ></app-car>

    <app-car
      carName="Lexus"
      :carYear="1994"
    ></app-car>
  </div>
</template>

<script>
import Car from './Car.vue'


export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      carName: 'Toyota',
      carYear: 2003
    }
  },
  components: {
    appCar: Car,
  }
}
</script>

<style>

</style>
