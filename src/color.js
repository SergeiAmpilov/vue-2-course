export default {
  bind: function(el, bindings, vnode) {
    console.log('bind');
    el.style.color = 'purple';
  },
  inserted: function(el, bindings, vnode) {
    console.log('inserted');
  },
  update: function(el, bindings, vnode, oldVnode) {
    console.log('update');

  },
  componentUpdated: function(el, bindings, vnode, oldVnode) {
    console.log('componentUpdated');

  },
  unbind: function() {
    console.log('unbind');

  }
}
