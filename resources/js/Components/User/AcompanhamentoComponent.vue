<template>
    <section class="filter">
        <v-row>
            <v-col cols="12" sm="6" md="3" class="col-filter">
                <v-select
                    v-model="selectedId"
                    label="Prestador de serviço"
                    :item-props="itemProps"
                    :items="data.prestadores"
                    item-text="id"
                    item-value="id"
                ></v-select>
            </v-col>
            <v-col cols="12" sm="6" md="3" class="col-filter">
                <v-text-field
                    v-model="date.dataInicial"
                    label="Data Inicial"
                    type="date"
                ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3" class="col-filter">
                <v-text-field
                    v-model="date.dataFinal"
                    label="Data Final"
                    type="date"
                ></v-text-field>
            </v-col>

            <v-col
                cols="12"
                sm="12"
                md="3"
                class="d-flex align-center justify-end mb-4"
            >
                <v-btn
                    @click="searchList()"
                    class="btn-search"
                    :disabled="selectedId == null"
                >
                    Buscar
                </v-btn>
                <v-btn @click="cleanfilter()" class="ml-2">Limpar Filtro</v-btn>
            </v-col>
        </v-row>
    </section>
    <v-expansion-panels
        variant="accordion"
        v-if="JSON.stringify(data.records.hour) !== '[]'"
    >
        <v-expansion-panel
            elevation="0"
            style="background-color: blueviolet; color: white"
        >
            <v-expansion-panel-title :hide-actions="true">
                <v-row no-gutters>
                    <v-col cols="4" class="d-flex justify-start"> Dia </v-col>
                    <v-col cols="4" class="text--secondary">
                        Tempo trabalhado
                    </v-col>
                    <v-col cols="4" class="text--secondary"> Status </v-col>
                </v-row>
            </v-expansion-panel-title>
        </v-expansion-panel>
        <v-expansion-panel
            elevation="0"
            v-for="(day, index) in data.records.hour"
            :key="index"
        >
            <v-expansion-panel-title>
                <v-row no-gutters>
                    <v-col cols="4" class="d-flex justify-start">
                        {{ formatDate(index.slice(0, 10)) }}
                    </v-col>
                    <v-col cols="4" class="text--secondary">
                        {{ data.records.totalHour[index] }}
                    </v-col>
                    <v-col cols="4" class="text--secondary">
                        <v-icon
                            v-if="!data.records.errors[index]"
                            icon="mdi-check-all"
                        />
                        <v-icon
                            v-if="data.records.errors[index]"
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
                    <v-col cols="2" class="text-left"> Entrada </v-col>
                    <v-col cols="2" class="text-left"> Saida </v-col>

                    <v-col cols="2" class="text-left"> Tempo trabalhado </v-col>
                    <v-col cols="2" class="text-left"> Intervalo </v-col>
                    <v-col cols="2" class="text-left"> Ações </v-col>
                </v-row>
                <v-row
                    v-for="(item, count) in data.records.hour[index]"
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
                        <v-icon v-if="!item.output" icon="mdi-alert" />
                    </v-col>

                    <v-col cols="2" class="text-left">
                        {{ item.hour_complete }}
                        <v-icon v-if="!item.hour_complete" icon="mdi-alert" />
                    </v-col>
                    <v-col cols="2" class="text-left">
                        {{
                            count == 0
                                ? " "
                                : interHours(
                                      data.records.hour[index][count - 1]
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
    <div v-else-if="data.selected" class="mensagem">
        <h1>Nenhum dado encontrado!</h1>
    </div>
    <div v-else class="mensagem">
        <h1>Selecione um prestador!</h1>
    </div>
</template>

<script lang="ts" setup>
import { router } from "@inertiajs/vue3";
import { ref, watch, onMounted, reactive } from "vue";

const props = defineProps({
    data: Object,
});

const date: any = reactive({
    dataInicial: props.data.dateFilter.dataInicial,
    dataFinal: props.data.dateFilter.dataFinal,
});

const selectedId: any = ref(props.data.selected);

function searchList() {
    router.visit("/gestao/acompanhamento", {
        method: "post",
        data: {
            id: selectedId.value,
            dataInicial: date.dataInicial,
            dataFinal: date.dataFinal,
        },
    });
}

function itemProps(item) {
    return {
        title: item.name,
        subtitle: item.role,
    };
}

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
    const data1: any = new Date("1970-01-01T" + output + "Z");
    const data2: any = new Date("1970-01-01T" + input + "Z");
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
    date.dataInicial = "";
    date.dataFinal = "";
}
</script>

<style scoped>
.mensagem {
    text-align: center;
    font-size: 24px;
    padding-top: 50px;
    padding-bottom: 50px;
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
/* .v-btn{
    margin-right: 5px;
} */

@media (max-width: 600px) {
    .filter {
        display: flex;
        flex-direction: column-reverse;
    }
    .col-filter:nth-child(1) {
        padding-bottom: 0px;
    }

    .col-filter:nth-child(2),
    .col-filter:nth-child(3) {
        flex: 0 0 50%;
        padding: 0px 0px 0px 0px;
    }

    .filter .v-row:nth-child(2) {
        margin-bottom: 10px;
    }
}
</style>
