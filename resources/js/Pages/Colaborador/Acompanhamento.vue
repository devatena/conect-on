<script setup lang="ts">
import { Head, Link, router } from "@inertiajs/vue3";
import CardTitle from "@/Components/User/CardTitle.vue";
import ListRecords from "@/Components/User/ListRecord.vue";
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


function cleanfilter() {
    date.dataInicial = "";
    date.dataFinal = "";
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
                    <v-btn
                        @click="searchList()"
                        class="btn-search"
                        :disabled="
                            date.dataInicial === null || date.dataFinal === null
                        "
                    >
                        Buscar</v-btn
                    >
                    <v-btn
                        @click="cleanfilter()"
                        :disabled="
                            date.dataInicial === null || date.dataFinal === null
                        "
                    >
                        Limpar Filtro</v-btn
                    >
                </v-col>
            </v-row>

            <v-card-text>

                <ListRecords :records="records"/>
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

.title-data{
    background-color: blueviolet;
    color: white;
    padding: 5px;
}

</style>
