<template>
    <section class="bg-gray-100 flex items-center justify-center">
        <div class="mx-auto my-auto w-[500px]   px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-16 gap-y-8 ">
                <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">

                    <p class="text-2xl font-bold text-center p-2">Заполните форму</p>

                    <label class="flex cursor-pointer items-center justify-center gap-4 p-2">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24">
                                <title>incognito-circle</title>
                                <path
                                    d="M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M14.92 12.81C13.84 12.81 12.95 13.56 12.71 14.56C12.17 14.33 11.66 14.39 11.29 14.55C11.05 13.55 10.15 12.81 9.08 12.81C7.83 12.81 6.82 13.82 6.82 15.07C6.82 16.32 7.83 17.33 9.08 17.33C10.28 17.33 11.24 16.42 11.33 15.25C11.53 15.12 12.04 14.86 12.67 15.26C12.77 16.42 13.73 17.33 14.92 17.33C16.17 17.33 17.18 16.32 17.18 15.07C17.18 13.82 16.17 12.81 14.92 12.81M9.08 13.45C10 13.45 10.7 14.18 10.7 15.07C10.7 15.96 10 16.69 9.08 16.69C8.19 16.69 7.46 15.96 7.46 15.07C7.46 14.18 8.19 13.45 9.08 13.45M14.92 13.45C15.81 13.45 16.54 14.18 16.54 15.07C16.54 15.96 15.81 16.69 14.92 16.69C14 16.69 13.3 15.96 13.3 15.07C13.3 14.18 14 13.45 14.92 13.45M17.83 11.5H6.17V12.17H17.83V11.5M14.15 6.89C14 6.59 13.67 6.43 13.35 6.53L12 7L10.65 6.53L10.61 6.5C10.29 6.43 9.95 6.61 9.84 6.92L8.36 10.83H15.64L14.16 6.92L14.15 6.89Z" />
                            </svg>
                        </span>
                        <p>Анонимный режим</p>
                        <div class="flex items-center">
                            &#8203;
                            <input type="checkbox" @click="changeValue" class="size-4 rounded border-gray-300" />
                        </div>
                    </label>

                    <form action="#" class="space-y-4">
                        <div v-if="!anonymous">
                            <input class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Имя Фамилия Отчество" type="text" id="name" />
                        </div>
                        <div v-if='!anonymous' class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label class="sr-only" for="email">Email</label>
                                <input class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Email"
                                    type="email" id="email" />
                            </div>

                            <div>
                                <label class="sr-only" for="phone">Телефон</label>
                                <input class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Телефон"
                                    type="tel" id="phone" />
                            </div>
                        </div>
                        <div>
                            <label class="sr-only" for="message">Жалоба</label>

                            <textarea class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Жалоба"
                                rows="8" id="message"></textarea>
                        </div>
                        <div>
                            <div class="grid w-full max-w-sm items-center gap-1.5">
                                <Label for="picture">Файл</Label>
                                <Input id="picture" type="file" />
                            </div>
                        </div>

                        <div class="mt-4">
                            <button type="submit"
                                class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                                Send Enquiry
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

let anonymous = ref<boolean>(false);

const changeValue = () => {
    anonymous.value = !anonymous.value
}

</script>

<style scoped></style>