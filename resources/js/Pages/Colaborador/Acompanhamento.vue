<script setup>
import { Head, Link } from "@inertiajs/vue3";
import CardTitle from "@/Components/User/CardTitle.vue";

defineProps({
    records: Object,
});

function formatDate(dataString) {
    const [ano, mes, dia] = dataString.split("-");
    const data = new Date(ano, mes - 1, dia);
    const dataFormatada = `${data.getDate().toString().padStart(2, "0")}/${(
        data.getMonth() + 1
    )
        .toString()
        .padStart(2, "0")}/${data.getFullYear()}`;

    return dataFormatada;
}
</script>

<template>
    <Head title="Acompanhamento" />
    <painel-user>
        <CardTitle title="Acompanhamento" />
        <v-card class="mx-auto mt-6">
            <template v-slot:title> Meus registros </template>

            <v-card-text>
                <v-expansion-panels variant="accordion">
                    <v-expansion-panel
                        elevation="0"
                        style="background-color: blueviolet; color: white"
                        readonly="true"
                    >
                        <v-expansion-panel-title hide-actions="false">
                            <v-row no-gutters>
                                <v-col cols="4" class="d-flex justify-start">
                                    Dia
                                </v-col>
                                <v-col cols="4" class="text--secondary">
                                    Tempo trabalhado
                                </v-col>
                                <v-col cols="4" class="text--secondary">
                                    Ações
                                </v-col>
                            </v-row>
                        </v-expansion-panel-title>
                    </v-expansion-panel>
                    <v-expansion-panel
                        elevation="0"
                        v-for="(day, index) in records.hour"
                    >
                        <v-expansion-panel-title v-slot="{ open }">
                            <v-row no-gutters>
                                <v-col cols="4" class="d-flex justify-start">
                                    {{ formatDate(index.slice(0, 10)) }}
                                </v-col>
                                <v-col cols="4" class="text--secondary">
                                    Tempo trabalhado
                                </v-col>
                                <v-col cols="4" class="text--secondary">
                                </v-col>
                            </v-row>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-row
                                v-for="(item, index) in records.hour[index]"
                                :key="index"
                                no-gutters
                            >
                                <v-col cols="4" class="text-left">
                                    {{ item.date }}
                                </v-col>
                                <v-col cols="4" class="text-left">
                                    {{
                                        item.hour_complete
                                            ? item.hour_complete.slice(0, -3)
                                            : "----"
                                    }}
                                </v-col>
                            </v-row>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-card-text>
        </v-card>
    </painel-user>
</template>

<style scoped>
.v-card {
    border-top: 5px solid blueviolet;
}
.v-expansion-panel {
    border-bottom: 1px solid blueviolet;
}
</style>
