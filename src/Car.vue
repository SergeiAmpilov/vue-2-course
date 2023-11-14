
<template>
  <div class="car">
    <h3>Name: {{ carName }} / {{ reverseName }}</h3>
    <p>Year: {{ carYear }}</p>
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
        default: 'default name'
      },
      carYear: Number
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
