<template>
  <div>
    <h1 v-colored:color.font="'green'">{{ title }}</h1>
    <p v-colored:background="'yellow'">Lorem ipsum dolor sit.</p>
    <p v-font>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum, sint inventore a quia accusantium, facere iure ea cupiditate fugit recusandae reprehenderit vel qui obcaecati, dicta blanditiis provident odit asperiores amet culpa aut veritatis? Odit dignissimos eveniet natus nihil rem?</p>
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
  },
  directives: {
    font: {
      bind(el, bindings, vnode) {
        el.style.fontSize= '49px';
      }
    }
  },

}
</script>
