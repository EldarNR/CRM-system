<template>
    <section class=" flex bg-white">
        <div class="flex min-h-screen w-full flex-col">

            <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header
                    class="sticky top-0 z-30 flex h-14 items-center gap-4 border-b px-4 sm:static sm:h-auto sm:border-0  sm:px-6">
                    <Sheet>
                        <SheetTrigger as-child>
                            <Button size="icon" variant="outline" class="sm:hidden">
                                <PanelLeft class="h-5 w-5" />
                                <span class="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" class="sm:max-w-xs">
                            <nav class="grid gap-6 text-lg font-medium">
                                <a href="#"
                                    class="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full  text-lg font-semibold text-primary-foreground md:text-base">
                                    <Package2 class="h-5 w-5 transition-all group-hover:scale-110" />
                                    <span class="sr-only">Acme Inc</span>
                                </a>
                                <a href="#"
                                    class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                                    <Home class="h-5 w-5" />
                                    Dashboard
                                </a>
                                <a href="#"
                                    class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                                    <ShoppingCart class="h-5 w-5" />
                                    Orders
                                </a>
                                <a href="#" class="flex items-center gap-4 px-2.5 text-foreground">
                                    <Package class="h-5 w-5" />
                                    Products
                                </a>
                                <a href="#"
                                    class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                                    <Users2 class="h-5 w-5" />
                                    Customers
                                </a>
                                <a href="#"
                                    class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                                    <LineChart class="h-5 w-5" />
                                    Settings
                                </a>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <Breadcrumb class="hidden md:flex">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink as-child>
                                    <a href="#">Dashboard</a>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink as-child>
                                    <a href="#">Products</a>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>All Products</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div class="relative ml-auto flex-1 md:grow-0">
                        <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="search" placeholder="Search..."
                            class="w-full rounded-lg  pl-8 md:w-[200px] lg:w-[320px]" />
                    </div>
                </header>
                <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <Tabs default-value="all">
                        <div class="flex items-center">
                            <div class="ml-auto flex items-center gap-2">
                                <DropdownMenu>
                                    <DropdownMenuTrigger as-child>
                                        <Button variant="outline" size="sm" class="h-7 gap-1">
                                            <ListFilter class="h-3.5 w-3.5" />
                                            <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                                Filter
                                            </span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem checked>
                                            Active
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>Draft</DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Archived
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <Button size="sm" variant="outline" class="h-7 gap-1">
                                    <File class="h-3.5 w-3.5" />
                                    <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Export
                                    </span>
                                </Button>
                                <Button size="sm" class="h-7 gap-1">
                                    <PlusCircle class="h-3.5 w-3.5" />
                                    <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Add Product
                                    </span>
                                </Button>
                            </div>
                        </div>
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
                                            <CardTitle>Антикор</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            Жалоб:0
                                        </CardContent>
                                        <CardFooter>
                                            <NuxtLink to="/1" class="grid gap-1 mx-auto">
                                                <Button class="text-center bg-green-800">
                                                    <Check /> Перейти
                                                </Button>
                                                <Button class=" text-center bg-red-500">
                                                    Удалить
                                                </Button>
                                                <Button class="text-center bg-orange-800">
                                                    Изменить
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
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
</script>