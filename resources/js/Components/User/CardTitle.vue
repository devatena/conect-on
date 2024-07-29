<script setup>
import { router } from '@inertiajs/vue3'

const goBack = () => {
    window.history.back();
};

defineProps({
    title: String,
    back: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <v-card class="mx-auto">
        <v-icon icon="mdi-arrow-left" start v-if="back" @click="goBack()"></v-icon>
        <template v-slot:title> {{ title }} </template>
    </v-card>
</template>

<style scoped>
.v-card {
    border-top: 5px solid blueviolet;
    display: flex;
    justify-content: start;
    flex-direction: row-reverse;
    align-items: center;
}
.v-icon {
    color: blueviolet;
    margin-left: 8px;
}
</style>
