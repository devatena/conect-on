<template>
    <painel-user>
        <Head title="Painel de gestão" />
        <CardTitle :title="'Painel de Gestão'+ pageName" :back="backTo" />
        <section class="pt-4" >
            <v-card>
                <slot></slot>

            </v-card>
        
        </section>
    </painel-user>
</template>

<script setup lang="ts">
import { Head, Link } from "@inertiajs/vue3";
import CardTitle from "@/Components/User/CardTitle.vue";


defineProps({
    backTo:{
        type: Boolean,
        default: false
    },
    pageName:{
        type: String,
        default: ''
    }
});


</script>

<style scoped>

</style>