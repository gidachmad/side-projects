<script setup lang="ts">
const file = ref<File[]>([]);
</script>

<template>
  <section class="flex flex-col items-start gap-4">
    <h3> Merge PDF </h3>
    <!-- create template for merge using nuxt ui template -->
    <p>Combine PDFs in the order you want to merge</p>
    <UFieldgroup label="Select PDF files to merge" class="mb-4 w-full">
      <UFileUpload
v-model="file" :interactive="false" label="Drop your PDFs here" description="PDFs (max. 2MB)"
        highlight class="min-h-dvh w-full" multiple accept=".pdf">
        <template #actions="{ open }">
          <UButton label="Select images" icon="i-lucide-upload" color="neutral" variant="outline" @click="open()" />
        </template>

        <template #files-bottom="{ removeFile, files }">
          <UButton v-if="files?.length" label="Remove all files" color="neutral" @click="removeFile()" />
        </template>

      </UFileUpload>
      <!-- <Ubutton class="mt-4" color="primary" @click="console.log(file)">Merge PDF</UButton> -->
    </UFieldgroup>
  </section>
</template>
