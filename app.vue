<template>
  <NuxtLayout>
    <div class="flex ">
      <sidebar class="float-start" />
      <NuxtPage class="p-2 container" />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import sidebar from '~/components/sidebar/sidebar.vue'
</script>