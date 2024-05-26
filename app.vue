<template>
  <NuxtLayout>
    <sidebar class="w-[200px] float-start" />
    <div class="container flex flex-col dark dark:bg-slate-800">
      <NuxtPage class="p-2" />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import sidebar from '~/components/sidebar/sidebar.vue'
</script>