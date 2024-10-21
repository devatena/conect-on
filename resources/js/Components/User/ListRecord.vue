<template>
    <div
        elevation="0"
        v-for="(day, index) in props.records.hour"
        :key="index"
        class="mb-4"
    >
        <v-row no-gutters class="title-data">
            <v-col cols="9" class="d-flex justify-start">
                {{ formatDate(index.slice(0, 10)) }}
            </v-col>
            <v-col cols="2" class="text--secondary">
                Total: {{ records.totalHour[index] }}
            </v-col>
            <v-col cols="1" class="text--secondary">
                <v-icon v-if="!records.errors[index]" icon="mdi-check-all" />
                <v-icon v-if="records.errors[index]" icon="mdi-alert" />
            </v-col>
        </v-row>

        <v-row
            no-gutters
            class="p-2"
            style="background-color: rgb(213, 213, 213)"
        >
            <v-col cols="1" class="text-left"> # </v-col>
            <v-col cols="2" class="text-center"> Entrada </v-col>
            <v-col cols="2" class="text-center"> Saida </v-col>

            <v-col cols="2" class="text-center"> Tempo trabalhado </v-col>
            <v-col cols="2" class="text-center"> Intervalo </v-col>
            <v-col cols="3" class="text-center"> Ações </v-col>
        </v-row>
        <v-row
            v-for="(item, count) in records.hour[index]"
            :key="index"
            no-gutters
            class="p-2"
        >
            <v-col cols="1" class="text-left">
                {{ count + 1 }}
            </v-col>
            <v-col cols="2" class="text-center">
                {{ item.input }}
            </v-col>
            <v-col cols="2" class="text-center">
                {{ item.output }}
                <v-icon v-if="!item.output" icon="mdi-alert" />
            </v-col>

            <v-col cols="2" class="text-center">
                {{ item.hour_complete }}
                <v-icon v-if="!item.hour_complete" icon="mdi-alert" />
            </v-col>
            <v-col cols="2" class="text-center">
                {{
                    count == 0
                        ? " "
                        : interHours(
                              records.hour[index][count - 1].output,
                              item.input
                          )
                }}
                <br />
            </v-col>
            <v-col cols="3" class="text-center">
                <UserAjuste :record="item" v-if="item.adjustment !== 'approved'" />
                <v-btn
                    variant="outlined"
                    size="x-small"
                    color="blue"
                    class="mb-1 mt-1"
                    v-if="item.adjustment === 'approved'"
                >
                    Horas ajustadas
                </v-btn>
            </v-col>
        </v-row>
        <hr />
    </div>
</template>
<script setup lang="ts">
import UserAjuste from "@/Components/User/UserAjuste.vue";
import { reactive } from "vue";

const props = defineProps({
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
</script>

<style lang="css" scoped>
.title-data {
    background-color: blueviolet;
    color: white;
    padding: 5px;
}

@media screen and (max-width: 400px) {
    .v-col {
        font-size: 8px;
    }
}
</style>
