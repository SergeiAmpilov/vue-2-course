<template>
  <div id="app">
    <filt></filt>
    <hr>
    <container>
      <h2 slot="title">content from html</h2>
      <span slot="text">{{ msg }}</span>
    </container>
    <hr>
    <h1>Parent: {{ carName }}</h1>
    <app-car
      :carName="carName"
      :carYear="carYear"
      @nameChanged="carName = $event"
      @updateCounter="counter = $event"
    ></app-car>

    <hr>
    <app-counter>
      <h3>Pre header</h3>
    </app-counter>

  </div>
</template>

<script>
import Car from './Car.vue'
import Container from './Container.vue';
import Counter from './Counter.vue'
import Filter from './Filter.vue';



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
    container: Container,
    filt: Filter
  }
}
</script>

<style>

</style>
