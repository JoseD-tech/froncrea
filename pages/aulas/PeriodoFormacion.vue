<script setup>

import UiParentCard from '@/components/shared/UiParentCard.vue';

let dataPeriodo = [
    {
        periodo: '2022 - 2023',
    },
]

</script>

<template>
    <v-row>
        <v-col cols="12" md="12">
            <UiParentCard title="Gestion De Tipo De Formacion">
                <div class="px-4 d-flex align-center justify-end">
                    <p class="font-weight-bold mr-4">Acciones:</p>
                    <div>
                        <v-btn color="secondary" class="mr-2" prepend-icon="mdi-plus">Registrar Periodo</v-btn>
                    </div>
                </div>
                <div>
                    <v-table height="500px" class="py-6">
                        <thead>
                            <tr>
                                <th class="text-left">
                                    Periodo De Formacion
                                </th>
                                <th class="text-left">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in dataPeriodo" :key="item.name">
                                <td>{{ item.periodo }}</td>
                                <td>
                                    <v-btn variant="outlined" color="error" class="mr-2">
                                        <v-icon icon="mdi-database-eye" size="25"></v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </div>
            </UiParentCard>
        </v-col>
    </v-row>
</template>