<template>
    <button @click="onClick">Click!</button>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class App extends Vue {
    message: string = 'Hello!';

    onClick(): void {
      window.alert(this.message);
    }
  }
</script>
