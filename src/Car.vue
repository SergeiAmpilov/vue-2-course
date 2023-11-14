
<template>
  <div class="car">
    <h3>Name: {{ carName }} / {{ reverseName }}</h3>
    <p>Year: {{ carYear }}</p>
    <button @click="changeName">Change name</button>
    <button
      @click="updateCounter"
    >Update counter</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    // props: ['carName', 'carYear' ],
    props: {
      carName: {
        type: String,
        required: true,
        default: 'default name',
      },
      counter: Number,
      carYear: Number
    },
    methods: {
      changeName() {
        this.carName = 'Opel Vectra';
        this.$emit('nameChanged', this.carName);
      },
      updateCounter() {
        this.$emit('updateCounter', this.counter++);

      },
    },
    computed: {
      reverseName: function() {
        return this.carName.split('').reverse().join('');
      }
    },
  }

</script>


<style>

.car {
  border: 1px solid black;
}

.car h3 {
  margin-top: 20px;
}
</style>
