<script setup lang="ts">
import { Head, Link, router } from "@inertiajs/vue3";
import CardTitle from "@/Components/User/CardTitle.vue";
import { reactive } from "vue";

const props = defineProps({
    records: Object,
    dateFilter: {
        type: Object,
        default: {
            dataInicial: "",
            dataFinal: "",
        },
    },
});

const date: any = reactive({
    dataInicial: props.dateFilter.dataInicial,
    dataFinal: props.dateFilter.dataFinal,
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

function interHours(output, input) {
    // Convertendo as strings em objetos Date
    const data1 = new Date("1970-01-01T" + output + "Z");
    const data2 = new Date("1970-01-01T" + input + "Z");
    const diferencaEmMs = Math.abs(data2 - data1);

    // Convertendo a diferença para horas
    const diferencaEmHoras = diferencaEmMs / (1000 * 60 * 60);

    // Separando em horas e minutos
    const h = Math.floor(diferencaEmHoras);
    const m = Math.floor((diferencaEmHoras - h) * 60);
    const s = Math.round(((diferencaEmHoras - h) * 60 - m) * 60);

    // Formatando para o padrão "00:00"
    const horaFormatada = (h < 10 ? "0" : "") + h;
    const minutoFormatado = (m < 10 ? "0" : "") + m;
    const segundoFormatado = (s < 10 ? "0" : "") + s;

    const hora = horaFormatada + ":" + minutoFormatado + ":" + segundoFormatado;

    return hora;
}
function cleanfilter() {
    date.dataInicial = '';
    date.dataFinal = '';
    router.visit("/acompanhamento");
}

function searchList() {
    router.visit("/acompanhamento", {
        method: "get",
        data: {
            dataInicial: date.dataInicial,
            dataFinal: date.dataFinal,
        },
    });
}
</script>

<template>
    <Head title="Acompanhamento" />
    <painel-user>
        <CardTitle title="Acompanhamento" />
        <v-card class="mx-auto mt-6">
            <template v-slot:title> Meus registros </template>
            <v-row>
                <v-col cols="3">
                    <v-text-field
                        v-model="date.dataInicial"
                        label="Data Inicial"
                        type="date"
                    ></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field
                        v-model="date.dataFinal"
                        label="Data Final"
                        type="date"
                    ></v-text-field>
                </v-col>
                <v-col cols="2" class="btn-filter">
                    <v-btn @click="searchList()" class="btn-search" :disabled="date.dataInicial === null || date.dataFinal === null">
                        Buscar</v-btn
                    >
                    <v-btn @click="cleanfilter()" :disabled="date.dataInicial === null || date.dataFinal === null"> Limpar Filtro</v-btn>
                </v-col>
            </v-row>

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
                        :key="index"
                    >
                        <v-expansion-panel-title>
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
                                </v-col>
                                <v-col cols="2" class="text-left">
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
                                    {{
                                        count == 0
                                            ? " "
                                            : interHours(
                                                  records.hour[index][count - 1]
                                                      .output,
                                                  item.input
                                              )
                                    }}
                                    <br />
                                </v-col>
                                <v-col cols="2" class="text-left">
                                    <v-btn
                                        prepend-icon="mdi-pencil"
                                        variant="outlined"
                                        size="x-small"
                                        color="orange"
                                        class="mb-1"
                                    >
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

.btn-filter {
    display: flex;
    flex-direction: row;
    align-items: start;
    padding-top: 20px;
    gap: 8px;
}

.btn-search {
    background-color: blueviolet;
    color: white;
}
</style>
