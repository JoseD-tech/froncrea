<script setup>
/*Call Components*/
import SalesOverview from '@/components/dashboard/SalesOverview.vue';
import YearlyBreakup from '@/components/dashboard/YearlyBreakup.vue';
import MonthlyEarning from '@/components/dashboard/MonthlyEarnings.vue';

</script>

<template>
    <v-row>
        <v-col cols="12">
            <v-row>
                <!-- Sales overview -->
                <v-col cols="12" lg="8">
                    <SalesOverview />
                </v-col>
                <!-- Yearly Breakup / Monthly Earnings -->
                <v-col cols="12" lg="4">
                    <div class="mb-6">
                        <YearlyBreakup />
                    </div>
                    <div>
                        <MonthlyEarning />
                    </div>
                </v-col>
                <!-- Yearly Breakup / Monthly Earnings -->
                <v-col cols="12">
                    <div class="mb-10">
                        <MonthlyEarning />
                    </div>
                </v-col>
                
            </v-row>
        </v-col>
        <v-col class="text-center mt-4">
            <p class="font-weight-bold">Desarrollado por DTSI</p>
        </v-col>
    </v-row>
</template>