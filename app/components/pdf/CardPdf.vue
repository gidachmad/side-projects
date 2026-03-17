<script setup lang="ts">
import type { pdf_feature } from '~/data/pdf';

defineProps<{
  feature: pdf_feature;
}>()
</script>

<template>
  <div class="">
    <Icon v-if="feature.icon" class="w-16 h-16 ml-2" :name="feature.icon" />
    <h4>{{ feature.title }}</h4>
    <p class="text-sm">{{ feature.description }}</p>
  </div>
</template>
