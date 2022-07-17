<template>
  <div>
    <div>{{ num }}</div>
    <button @click="onClick">按钮</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Counter",
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    onClick() {
      this['num']++;
    },
  },
};
</script>

<style></style>
