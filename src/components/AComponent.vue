<script setup>
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();
</script>
<template>
  <h1>A Component</h1>
  <h2>Count: {{ store.count }}</h2>
  <h2>Double Count: {{ store.doubleCount }}</h2>
  <button @click="store.increment">Increment</button>
</template>
<style></style>
