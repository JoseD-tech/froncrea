<script setup>

import UiParentCard from '@/components/shared/UiParentCard.vue';

let dataAulas = [
    {
        nombreAula: 'Programacion Web',
        urlAula: 'www.google.com',
        plataforma: 'Moodle',
        modalidad: 'Virtual',
        tipoFormacion: 'practica',
        facilitador: 'Juan de la torre',
        sede: 'Dolores',
        periodo: '22/11/2023',
    },
    {
        nombreAula: 'Programacion Web',
        urlAula: 'www.google.com',
        plataforma: 'Moodle',
        modalidad: 'Virtual',
        tipoFormacion: 'practica',
        facilitador: 'Juan de la torre',
        sede: 'Dolores',
        periodo: '22/11/2023',
    },
    {
        nombreAula: 'Programacion Web',
        urlAula: 'www.google.com',
        plataforma: 'Moodle',
        modalidad: 'Virtual',
        tipoFormacion: 'practica',
        facilitador: 'Juan de la torre',
        sede: 'Dolores',
        periodo: '22/11/2023',
    },
    {
        nombreAula: 'Programacion Web',
        urlAula: 'www.google.com',
        plataforma: 'Moodle',
        modalidad: 'Virtual',
        tipoFormacion: 'practica',
        facilitador: 'Juan de la torre',
        sede: 'Dolores',
        periodo: '22/11/2023',
    },
    {
        nombreAula: 'Programacion Web',
        urlAula: 'www.google.com',
        plataforma: 'Moodle',
        modalidad: 'Virtual',
        tipoFormacion: 'practica',
        facilitador: 'Juan de la torre',
        sede: 'Dolores',
        periodo: '22/11/2023',
    },
    {
        nombreAula: 'Programacion Web',
        urlAula: 'www.google.com',
        plataforma: 'Moodle',
        modalidad: 'Virtual',
        tipoFormacion: 'practica',
        facilitador: 'Juan de la torre',
        sede: 'Dolores',
        periodo: '22/11/2023',
    },
    {
        nombreAula: 'Programacion Web',
        urlAula: 'www.google.com',
        plataforma: 'Moodle',
        modalidad: 'Virtual',
        tipoFormacion: 'practica',
        facilitador: 'Juan de la torre',
        sede: 'Dolores',
        periodo: '22/11/2023',
    },
    {
        nombreAula: 'Programacion Web',
        urlAula: 'www.google.com',
        plataforma: 'Moodle',
        modalidad: 'Virtual',
        tipoFormacion: 'practica',
        facilitador: 'Juan de la torre',
        sede: 'Dolores',
        periodo: '22/11/2023',
    },
    {
        nombreAula: 'Programacion Web',
        urlAula: 'www.google.com',
        plataforma: 'Moodle',
        modalidad: 'Virtual',
        tipoFormacion: 'practica',
        facilitador: 'Juan de la torre',
        sede: 'Dolores',
        periodo: '22/11/2023',
    },
    {
        nombreAula: 'Programacion Web',
        urlAula: 'www.google.com',
        plataforma: 'Moodle',
        modalidad: 'Virtual',
        tipoFormacion: 'practica',
        facilitador: 'Juan de la torre',
        sede: 'Dolores',
        periodo: '22/11/2023',
    },
    {
        nombreAula: 'Programacion Web',
        urlAula: 'www.google.com',
        plataforma: 'Moodle',
        modalidad: 'Virtual',
        tipoFormacion: 'practica',
        facilitador: 'Juan de la torre',
        sede: 'Dolores',
        periodo: '22/11/2023',
    },
    {
        nombreAula: 'Programacion Web',
        urlAula: 'www.google.com',
        plataforma: 'Moodle',
        modalidad: 'Virtual',
        tipoFormacion: 'practica',
        facilitador: 'Juan de la torre',
        sede: 'Dolores',
        periodo: '22/11/2023',
    },
    {
        nombreAula: 'Programacion Web',
        urlAula: 'www.google.com',
        plataforma: 'Moodle',
        modalidad: 'Virtual',
        tipoFormacion: 'practica',
        facilitador: 'Juan de la torre',
        sede: 'Dolores',
        periodo: '22/11/2023',
    },
    {
        nombreAula: 'Programacion Web',
        urlAula: 'www.google.com',
        plataforma: 'Moodle',
        modalidad: 'Virtual',
        tipoFormacion: 'practica',
        facilitador: 'Juan de la torre',
        sede: 'Dolores',
        periodo: '22/11/2023',
    },
    {
        nombreAula: 'Programacion Web',
        urlAula: 'www.google.com',
        plataforma: 'Moodle',
        modalidad: 'Virtual',
        tipoFormacion: 'practica',
        facilitador: 'Juan de la torre',
        sede: 'Dolores',
        periodo: '22/11/2023',
    },
]

</script>

<template>
    <v-row>
        <v-col cols="12" md="12">
            <UiParentCard title="Gestion De Aulas">
                <div class="px-4 d-flex align-center justify-end">
                    <p class="font-weight-bold mr-4">Acciones:</p>
                    <div>
                        <v-btn color="secondary" class="mr-2 bg-green" prepend-icon="mdi-plus">Crear Aula</v-btn>
                        <v-btn color="success" class="mr-2" prepend-icon="mdi-arrow-down-bold-box-outline">Exportar Aulas</v-btn>
                        <v-btn color="warning" class="" prepend-icon="mdi-arrow-up-bold-box-outline">Importar Aulas</v-btn>
                    </div>
                </div>
                <div>
                    <v-table height="500px" class="py-6">
                        <thead>
                            <tr>
                                <th class="text-left">
                                    Nombre De Aula
                                </th>
                                <th class="text-left">
                                    Url De Aula
                                </th>
                                <th class="text-left">
                                    Plataforma
                                </th>
                                <th class="text-left">
                                    Modalidad
                                </th>
                                <th class="text-left">
                                    Tipo De Formacion
                                </th>
                                <th class="text-left">
                                    Facilitador
                                </th>
                                <th class="text-left">
                                    Sede
                                </th>
                                <th class="text-left">
                                    Periodo
                                </th>
                                <th class="text-left">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in dataAulas" :key="item.name">
                                <td>{{ item.nombreAula }}</td>
                                <td>{{ item.urlAula }}</td>
                                <td>{{ item.plataforma }}</td>
                                <td>{{ item.modalidad }}</td>
                                <td>{{ item.tipoFormacion }}</td>
                                <td>{{ item.facilitador }}</td>
                                <td>{{ item.sede }}</td>
                                <td>{{ item.periodo }}</td>
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