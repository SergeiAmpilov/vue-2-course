export default {
  bind: function(el, bindings, vnode) {
    console.log('bind');
    // el.style.color = 'purple';
    el.style.color = bindings.value;
  }
}
