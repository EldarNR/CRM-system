<template>
    <div :class="state.them.dark ? 'dark' : ''">
        <div
            class="flex  h-screen flex-col justify-between border-e dark:bg-neutral-800 dark:text-gray-200 text-gray-900">
            <div class="px-4 py-6 ">
                <span class="grid h-10 w-32 place-content-center rounded-lg bg-gray-200 dark:bg-gray-500 text-xs ">
                    CRM
                </span>

                <ul class="mt-6 space-y-1">
                    <li>
                        <NuxtLink to="/"
                            class="block rounded-lg  hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 text-sm font-medium ">
                            General
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/reports"
                            class="block rounded-lg  hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 text-sm font-medium ">
                            Reports
                        </NuxtLink>
                    </li>
                </ul>
            </div>

            <div class="sticky inset-x-0 bottom-0 border-t border-gray-100 dark:border-gray-900">
                <switchThem class='flex items-center justify-center p-2' />
                <a href="#" class="flex items-center gap-2 p-4 hover:bg-gray-200 dark:hover:bg-gray-500">

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-user">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>

                    <div>
                        <p class="text-xs">
                            <strong class="block font-medium">Eric Frusciante</strong>

                            <span> eric@frusciante.com </span>
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import switchThem from '~/components/ui/swithThem/swith.vue'
import { storage } from '~/state';

const state = storage();


</script>