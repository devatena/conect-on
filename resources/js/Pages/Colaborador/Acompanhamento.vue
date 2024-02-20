<script setup >
import { Head, Link } from "@inertiajs/vue3";
import CardTitle from "@/Components/User/CardTitle.vue";

defineProps({
    records: Object
})
</script>

<template>
    <Head title="Acompanhamento" />
    <painel-user>
        <CardTitle title="Acompanhamento" />
        <v-card class="mx-auto mt-6">
            <template v-slot:title>
                Meus registros
            </template
            >

            <v-card-text>
                <v-table>
                    <thead>
                        <tr>
                            <th class="text-left">Dia</th>
                            <th class="text-left">Tempo trabalhado
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in records.hour" :key="index">
                        <td class="text-left">{{ item.date }}</td>
                        <td class="text-left">{{ item.hour_complete ? item.hour_complete.slice(0, -3) : '----'}}</td>
                    </tr>
                </tbody>
                </v-table>
            </v-card-text>
        </v-card>
    </painel-user>
</template>

<style scoped>
.v-card {
    border-top: 5px solid blueviolet;
}
</style>
