<template>
    <button @click="onClick">Click!</button>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({
    template: '<button @click="onClick">Click!</button>'
  })
  export default class App extends Vue {
    message: string = 'Hello!';

    onClick(): void {
      window.alert(this.message)
    }
  }
</script>
