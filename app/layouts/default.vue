<template>
  <div class="flex flex-1 flex-col min-h-screen">
    <!-- <AppSettings /> -->
    <main class="w-4/5 m-auto my-4 flex flex-col gap-8 grow">
      <slot />
    </main>
    <AppFooter class="mt-auto" />
  </div>
</template>
