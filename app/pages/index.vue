<script setup lang="ts">
import { NAVIGATIONS } from '~/data/navigation';

const routes = NAVIGATIONS

</script>

<template>
  <section>
    <h1 class="">landing page</h1>
    <p class="mb-6">
      You are landing at Gid Achmad AF-Regid side project Websites, here are the list of current side projects that have
      been working on
    </p>
    <h2 class="my-3">Side Project List</h2>
    <ul>
      <li v-for="(route, index) in routes" :key="index" class="underline">
        {{ index + 1 }}.
        <NuxtLink :to="route.to">{{ route.label }}</NuxtLink>
        <Icon class="ml-2" name="mdi:launch" />
      </li>
    </ul>
  </section>
</template>
