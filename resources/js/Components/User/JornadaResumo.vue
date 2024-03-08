<script setup>
import { ref, onMounted } from "vue";

defineProps({
    recordToDay: Object,
});

const date = new Date();
</script>

<template>
    <v-card class="mx-auto">
        <template v-slot:title>
            Acompanhamento - {{ date.toLocaleDateString("pt-BR") }}</template
        >

        <v-card-text>
            <v-table>
                <thead>
                    <tr>
                        <th class="text-left">#</th>
                        <th class="text-left">Entrada</th>
                        <th class="text-left">Saída</th>
                        <th class="text-left">HT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in recordToDay.horas" :key="index">
                        <td class="text-left">{{ index+1 }}</td>
                        <td class="text-left">{{ item.input }}</td>
                        <td class="text-left">{{ item.output ? item.output : '-----'  }}</td>
                        <td class="text-left">{{ item.hour_complete ? item.hour_complete : '----'}}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <th class="text-left"> Total de horas:</th>
                        <th class="text-left"> {{ recordToDay.totalHoras ? recordToDay.totalHoras: '-----' }}</th>
                    </tr>
                </tbody>
            </v-table>
        </v-card-text>
    </v-card>
</template>

<style scoped>
.v-card {
    border-top: 5px solid blueviolet;
}
</style>
