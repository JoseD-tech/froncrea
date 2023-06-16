<template>
    <v-locale-provider >
        <v-app>
            <LayoutFullMain/>
            <v-main>
                <v-container fluid class="page-wrapper">
                    <div class="maxWidth">
                        <RouterView />
                    </div>
                </v-container>
            </v-main>
        </v-app>
    </v-locale-provider>
</template>

<style>

html::-webkit-scrollbar {
  width: 8px;
}

html::-webkit-scrollbar-thumb {
  background-color: #ff6600;
  border-radius: 10px;
}

.v-navigation-drawer__content {
    overflow: hidden;
}

</style>
