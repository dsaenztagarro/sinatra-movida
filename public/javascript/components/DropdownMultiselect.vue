<template>
  <div>
    <button v-on:click="incrementCounter">Add {{counter}}</button>
  </div>
</template>

<script>
export default {
  name: 'dropdown-multiselect',
  data: function() {
    return {
      counter: 1
    }
  },
  methods: {
    incrementCounter: function() {
      this.counter = this.counter + 1
    }
  }
}
</script>
