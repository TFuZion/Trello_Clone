<script setup>
import { RouterView } from "vue-router";
import { Suspense } from "vue";

</script>

<template>
  <Suspense>
    <template #default>
      <RouterView>

      </RouterView>
    </template>

    <template #fallback>
      Loading...
    </template>
  </Suspense>

</template>

<style scoped></style>
