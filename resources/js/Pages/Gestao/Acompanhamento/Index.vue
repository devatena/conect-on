<template>
    <painel-gestao backTo="true" :page-name="pageTitle">
        <acompanhamento-component :data="props"></acompanhamento-component>
    </painel-gestao>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, reactive } from "vue";
import { router } from "@inertiajs/vue3";
import  AcompanhamentoComponent  from "@/Components/User/AcompanhamentoComponent.vue";

const pageTitle = ref(" | Acompanhamento de Horas");

const props = defineProps({
    records: Object,
    prestadores: Object,
    selected: Number,
    dateFilter: {
        type: Object,
        default: {
            dataInicial: "",
            dataFinal: "",
        },
    },
});

</script>

