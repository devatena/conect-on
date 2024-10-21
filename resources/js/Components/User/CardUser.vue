<script setup>
import { usePage } from "@inertiajs/vue3";
import { computed } from "vue";

const page = usePage();
const user = computed(() => page.props.auth.user);
</script>

<template>
    <v-card class="mx-auto">
        <template v-slot:title> {{ user.name }} </template>

        <v-card-text>
            <p><strong>Função:</strong> {{ user.role }}</p>
            <p><strong>Operação:</strong> {{ user.operation }}</p>
        </v-card-text>
    </v-card>
</template>

<style scoped>
.v-card {
    border-top: 5px solid blueviolet;
}
</style>
