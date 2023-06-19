<script setup lang="ts">
import { ref } from 'vue';
const checkbox = ref(true);
</script>

<template>
    <v-row class="d-flex my-3">
        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">Correo Electronico</v-label>
            <v-text-field variant="outlined" hide-details color="primary"></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">Clave</v-label>
            <v-text-field variant="outlined" type="password"  hide-details color="primary"></v-text-field>
        </v-col>
        <v-col cols="12" class="pt-0">
            <div class="d-flex flex-wrap align-center ml-n2">
                <v-checkbox v-model="checkbox"  color="primary" hide-details>
                    <template v-slot:label>Remeber this Device</template>
                </v-checkbox>
                
            </div>
        </v-col>
        <v-col cols="12" class="pt-0">
            <v-btn  to="/" color="primary" size="large" block   flat>Iniciar</v-btn>
        </v-col>
    </v-row>
</template>
