<script setup>

import UiParentCard from '@/components/shared/UiParentCard.vue';

let dataFacilitadores = [
    {
        nombreFacilitador: 'Juan Grabiel',
        ApellidoFacilitador: 'De la Torre Contreras',
        cedulaFacilitador: '29555555',
        telefonoFacilitador: '04145028808',
        sedeFacilitador: 'Barinas',
    },
    {
        nombreFacilitador: 'Juan Grabiel',
        ApellidoFacilitador: 'De la Torre Contreras',
        cedulaFacilitador: '29555555',
        telefonoFacilitador: '04145028808',
        sedeFacilitador: 'Barinas',
    },
    {
        nombreFacilitador: 'Juan Grabiel',
        ApellidoFacilitador: 'De la Torre Contreras',
        cedulaFacilitador: '29555555',
        telefonoFacilitador: '04145028808',
        sedeFacilitador: 'Barinas',
    },
    {
        nombreFacilitador: 'Juan Grabiel',
        ApellidoFacilitador: 'De la Torre Contreras',
        cedulaFacilitador: '29555555',
        telefonoFacilitador: '04145028808',
        sedeFacilitador: 'Barinas',
    },
    {
        nombreFacilitador: 'Juan Grabiel',
        ApellidoFacilitador: 'De la Torre Contreras',
        cedulaFacilitador: '29555555',
        telefonoFacilitador: '04145028808',
        sedeFacilitador: 'Barinas',
    },
    {
        nombreFacilitador: 'Juan Grabiel',
        ApellidoFacilitador: 'De la Torre Contreras',
        cedulaFacilitador: '29555555',
        telefonoFacilitador: '04145028808',
        sedeFacilitador: 'Barinas',
    },
    {
        nombreFacilitador: 'Juan Grabiel',
        ApellidoFacilitador: 'De la Torre Contreras',
        cedulaFacilitador: '29555555',
        telefonoFacilitador: '04145028808',
        sedeFacilitador: 'Barinas',
    },
    {
        nombreFacilitador: 'Juan Grabiel',
        ApellidoFacilitador: 'De la Torre Contreras',
        cedulaFacilitador: '29555555',
        telefonoFacilitador: '04145028808',
        sedeFacilitador: 'Barinas',
    },
    {
        nombreFacilitador: 'Juan Grabiel',
        ApellidoFacilitador: 'De la Torre Contreras',
        cedulaFacilitador: '29555555',
        telefonoFacilitador: '04145028808',
        sedeFacilitador: 'Barinas',
    },
    {
        nombreFacilitador: 'Juan Grabiel',
        ApellidoFacilitador: 'De la Torre Contreras',
        cedulaFacilitador: '29555555',
        telefonoFacilitador: '04145028808',
        sedeFacilitador: 'Barinas',
    },
    {
        nombreFacilitador: 'Juan Grabiel',
        ApellidoFacilitador: 'De la Torre Contreras',
        cedulaFacilitador: '29555555',
        telefonoFacilitador: '04145028808',
        sedeFacilitador: 'Barinas',
    },
    {
        nombreFacilitador: 'Juan Grabiel',
        ApellidoFacilitador: 'De la Torre Contreras',
        cedulaFacilitador: '29555555',
        telefonoFacilitador: '04145028808',
        sedeFacilitador: 'Barinas',
    },
    {
        nombreFacilitador: 'Juan Grabiel',
        ApellidoFacilitador: 'De la Torre Contreras',
        cedulaFacilitador: '29555555',
        telefonoFacilitador: '04145028808',
        sedeFacilitador: 'Barinas',
    },
    {
        nombreFacilitador: 'Juan Grabiel',
        ApellidoFacilitador: 'De la Torre Contreras',
        cedulaFacilitador: '29555555',
        telefonoFacilitador: '04145028808',
        sedeFacilitador: 'Barinas',
    },
    {
        nombreFacilitador: 'Juan Grabiel',
        ApellidoFacilitador: 'De la Torre Contreras',
        cedulaFacilitador: '29555555',
        telefonoFacilitador: '04145028808',
        sedeFacilitador: 'Barinas',
    },
    {
        nombreFacilitador: 'Juan Grabiel',
        ApellidoFacilitador: 'De la Torre Contreras',
        cedulaFacilitador: '29555555',
        telefonoFacilitador: '04145028808',
        sedeFacilitador: 'Barinas',
    },
]

</script>

<template>
    <v-row>
        <v-col cols="12" md="12">
            <UiParentCard title="Gestion De Facilitadores">
                <div class="px-4 d-flex align-center justify-end">
                    <p class="font-weight-bold mr-4">Acciones:</p>
                    <div>
                        <v-btn color="secondary" class="mr-2" prepend-icon="mdi-plus">Registrar Facilitador</v-btn>
                        <v-btn color="success" class="mr-2" prepend-icon="mdi-arrow-down-bold-box-outline">Exportar Facilitadores</v-btn>
                    </div>
                </div>
                <div>
                    <v-table height="500px" class="py-6">
                        <thead>
                            <tr>
                                <th class="text-left">
                                    Nombres
                                </th>
                                <th class="text-left">
                                    Apellidos
                                </th>
                                <th class="text-left">
                                    Cedula
                                </th>
                                <th class="text-left">
                                    Telefonos
                                </th>
                                <th class="text-left">
                                    Sede
                                </th>
                                <th class="text-left">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in dataFacilitadores" :key="item.name">
                                <td>{{ item.nombreFacilitador }}</td>
                                <td>{{ item.ApellidoFacilitador }}</td>
                                <td>{{ item.cedulaFacilitador }}</td>
                                <td>{{ item.telefonoFacilitador }}</td>
                                <td>{{ item.sedeFacilitador }}</td>
                                <td>
                                    <v-btn variant="outlined" color="secondary" class="mr-2">
                                        <v-icon icon="mdi-pen" size="25"></v-icon>
                                    </v-btn>
                                    <v-btn variant="outlined" color="error" class="mr-2">
                                        <v-icon icon="mdi-alpha-x-circle-outline" size="25"></v-icon>
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