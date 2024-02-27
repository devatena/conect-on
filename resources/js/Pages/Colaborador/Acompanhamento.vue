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
               
                    >
                        <v-expansion-panel-title :hide-actions="true">
                            <v-row no-gutters>
                                <v-col cols="4" class="d-flex justify-start">
                                    Dia
                                </v-col>
                                <v-col cols="4" class="text--secondary">
                                    Tempo trabalhado
                                </v-col>
                                <v-col cols="4" class="text--secondary">
                                    Status
                                </v-col>
                            </v-row>
                        </v-expansion-panel-title>
                    </v-expansion-panel>
                    <v-expansion-panel
                        elevation="0"
                        v-for="(day, index) in records.hour"
                    >
                        <v-expansion-panel-title >
                            <v-row no-gutters>
                                <v-col cols="4" class="d-flex justify-start">
                                    {{ formatDate(index.slice(0, 10)) }}
                                </v-col>
                                <v-col cols="4" class="text--secondary">
                                    {{ records.totalHour[index] }}
                                </v-col>
                                <v-col cols="4" class="text--secondary">
                                    <v-icon
                                        v-if="!records.errors[index]"
                                        icon="mdi-check-all"
                                    />
                                    <v-icon
                                        v-if="records.errors[index]"
                                        icon="mdi-alert"
                                    />
                                </v-col>
                            </v-row>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-row
                                no-gutters
                                class="p-2"
                                style="background-color: rgb(213, 213, 213)"
                            >
                                <v-col cols="2" class="text-left"> # </v-col>
                                <v-col cols="2" class="text-left">
                                    Entrada
                                </v-col>
                                <v-col cols="2" class="text-left">
                                    Saida
                                </v-col>

                                <v-col cols="2" class="text-left">
                                    Tempo trabalhado
                                </v-col> <v-col cols="2" class="text-left">
                                    Intervalo
                                </v-col>
                                <v-col cols="2" class="text-left">
                                    Ações
                                </v-col>
                            </v-row>
                            <v-row
                                v-for="(item, count) in records.hour[index]"
                                :key="index"
                                no-gutters
                            >
                                <v-col cols="2" class="text-left">
                                    {{ count + 1 }}
                                </v-col>
                                <v-col cols="2" class="text-left">
                                    {{ item.input }}
                                </v-col>
                                <v-col cols="2" class="text-left">
                                    {{ item.output }}
                                    <v-icon
                                        v-if="!item.output"
                                        icon="mdi-alert"
                                    />
                                </v-col>

                                <v-col cols="2" class="text-left">
                                    {{ item.hour_complete }}
                                    <v-icon
                                        v-if="!item.hour_complete"
                                        icon="mdi-alert"
                                    />
                                </v-col>
                                <v-col cols="2" class="text-left">
                                    00:00
                                </v-col>
                                <v-col cols="2" class="text-left">
                                    <v-btn  prepend-icon="mdi-pencil" variant="outlined" size="x-small" color="orange" class="mb-1">
                                        Ajuste
                                    </v-btn>
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
