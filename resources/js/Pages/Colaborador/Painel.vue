<script setup lang="ts">
import { Head, Link } from "@inertiajs/vue3";
import CardUSer from "@/Components/User/CardUser.vue";
import EntradaSaida from "@/Components/User/EntradaSaida.vue";
import JornadaResumo from "@/Components/User/JornadaResumo.vue";

defineProps({
    recordToDay: Object,
});
</script>

<template>
    <Head title="Painel" />
    <painel-user>
        <CardUSer />
        <v-row class="pt-4">
            <v-col cols="12" sm="6">
                <EntradaSaida />
            </v-col>
            <v-col cols="12" sm="6">
                <JornadaResumo :recordToDay="recordToDay" />
            </v-col>
        </v-row>
    </painel-user>
</template>

<style scoped></style>
