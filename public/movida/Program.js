export default Vue.component('program', {
  template: `<div>{{ name }}</div>`,
  props: {
    program: Object
  },
  computed: {
    name() {
      return this.program.name
    }
  }
})
