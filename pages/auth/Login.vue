<script setup>


</script>
<template>
    <div class="authentication">
        <v-container fluid class="pa-3">
            <v-row class="h-100vh d-flex justify-center align-center">
                <v-col cols="12" lg="4" xl="3" class="d-flex align-center">
                    <v-card rounded="md" elevation="10" class="px-sm-1 px-0 withbg mx-auto" max-width="500">
                        <v-card-item class="pa-sm-8">
                            <div class="d-flex justify-center pb-8">
                                <img src="@/public/images/logos/logos.svg" alt="Logos Direcciones">
                            </div>
                            <div class="text-h3 text-uppercase text-muted text-center mb-3">Iniciar Sesion</div>
                            <AuthLoginForm />
                            <h6 class="text-h6 text-muted font-weight-medium d-flex justify-center align-center mt-3">
                                Si no recuerdas tu clave contacta al DTSI
                            </h6>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
