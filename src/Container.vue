<template>
  <div>
    <h1 v-if="visible" v-colored>{{ title }}</h1>
    <slot name="title"></slot>
    <hr>
    <slot name="text"></slot>
    <button @click="visible = !visible">Hide me</button>
    <button @click="title = 'total new title'">Change title</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      visible: true,
      title: 'My first title'
    }
  }

}
</script>
