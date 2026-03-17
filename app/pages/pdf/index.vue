<script setup lang="ts">
import CardPdf from '~/components/pdf/CardPdf.vue';
import { pdfFeatures, type pdf_feature } from '~/data/pdf';

const features: pdf_feature[] = pdfFeatures 
</script>

<template>
  <section>
    <h1>this is pdf page</h1>
    <NuxtLink to="/" class="my-4">back to home</NuxtLink>
    <ul class="flex flex-row items-stretch gap-4 mt-6">
      <li v-for="(feature, index) in features" :key="index" class="border rounded-lg p-4 basis-4/5">
        <NuxtLink :to="`/pdf` + feature.link" class="h-full w-full">
          <CardPdf :feature="feature" />
        </NuxtLink>
      </li>
    </ul>


  </section>
</template>
