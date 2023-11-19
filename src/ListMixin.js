export default {
  data: function() {
    return {
      searchname: '',
      names: ['Vika', 'Andrei', 'Popkova', 'a4']
    };
  },
  computed: {
    filteredNames: function() {
      return this.names.filter((element) => {
        return element.toLocaleLowerCase().indexOf(this.searchname.toLowerCase()) !== -1;
      })
    },
  },
}
