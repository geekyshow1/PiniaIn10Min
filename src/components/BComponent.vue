<script setup>
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();
</script>
<template>
  <hr />
  <h1>B Component</h1>
  <h2>Count: {{ store.count }}</h2>
  <h2>Double Count: {{ store.doubleCount }}</h2>
</template>
<style></style>
