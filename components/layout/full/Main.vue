<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import sidebarItems from '@/components/layout/full/vertical-sidebar/sidebarItem';
import { Menu2Icon } from 'vue-tabler-icons';
const sidebarMenu = shallowRef(sidebarItems);
const sDrawer = ref(true);
</script>

<template>
    <!------Sidebar-------->
    <v-navigation-drawer left elevation="10" app  v-model="sDrawer">
        <!---Logo part -->
        <div class="text-center">
            <NuxtLink to="/">
                <img src="@/public/images/logos/logos.png" height="100" max-width="100" alt="Logos Direcciones UNELLEZ">
            </NuxtLink>
        </div>
        <!-- ---------------------------------------------- -->
        <!---Navigation -->
        <!-- ---------------------------------------------- -->
        <div>
            <perfect-scrollbar class="scrollnavbar">
                <v-list class="px-2">
                    <!---Menu Loop -->
                    <template v-for="(item, i) in sidebarMenu">
                        <!---Item Sub Header -->
                        <LayoutFullVerticalSidebarNavGroup :item="item" v-if="item.header" :key="item.title" />

                        <!---Single Item-->
                        <LayoutFullVerticalSidebarNavItem :item="item" :key="i" v-else class="leftPadding" />
                        <!---End Single Item-->
                    </template>
                </v-list>
            </perfect-scrollbar>
        </div>

    </v-navigation-drawer>
    <!------Header-------->
    <v-app-bar elevation="10" height="100">
        <div class="d-flex align-center justify-space-between w-100">
            <!--<div class="ml-4 text-h5 capitalize font-weight-light">
                <h1>Sistema Crea</h1>
            </div>
            <v-spacer></v-spacer>-->
            <div class="mr-4">
                <v-btn class="hidden-lg-and-up ms-md-3 ms-sm-5 ms-3 text-muted" @click="sDrawer = !sDrawer" icon
                    variant="flat" size="small">
                    <Menu2Icon size="20" stroke-width="1.5" />
                </v-btn>
                <!-- Notification -->
                <LayoutFullVerticalHeaderNotificationDD />
            </div>
            <div>
                <!-- User Profile -->
                <LayoutFullVerticalHeaderProfileDD />
            </div>
        </div>
    </v-app-bar>
</template>
