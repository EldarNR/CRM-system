<template>
    <div>
        <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <Tabs default-value="all">
                <TabsContent value="all">
                    <Card>
                        <CardHeader>
                            <CardTitle>Products</CardTitle>
                            <CardDescription>
                                Manage your products and view their sales performance.
                            </CardDescription>
                        </CardHeader>
                        <CardContent class="flex p-2 text-center">
                            <Card class="w-[300px]">
                                <CardHeader>
                                    <CardTitle>Имя</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    Жалоб:0
                                </CardContent>
                                <CardFooter>
                                    <NuxtLink to="1" class="mx-auto">

                                        <Button class="w-full text-center">
                                            Перейти
                                        </Button>
                                    </NuxtLink>
                                </CardFooter>

                            </Card>
                        </CardContent>
                        <CardFooter>
                            <div class="text-xs text-muted-foreground">
                                Showing <strong>1-10</strong> of <strong>32</strong>
                                products
                            </div>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </main>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>