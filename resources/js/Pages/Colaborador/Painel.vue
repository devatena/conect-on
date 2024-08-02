<script setup lang="ts">
import { Head, Link, usePage } from "@inertiajs/vue3";
import CardUSer from "@/Components/User/CardUser.vue";
import EntradaSaida from "@/Components/User/EntradaSaida.vue";
import JornadaResumo from "@/Components/User/JornadaResumo.vue";
import { computed } from "vue";

defineProps({
    recordToDay: Object,
});

const page: any = usePage();

const feedback = computed(() => {
    return {
        message: page.props.flash.message,
        link: page.props.flash.messageLink,
    };
});
</script>

<template>
    <Head title="Painel" />
    <painel-user>
        <CardUSer />
        <v-alert
            :text="feedback.message"
            title="Sucesso"
            type="success"
            class="mt-4"
            v-if="feedback.message"
        >
            <br />
            <v-btn prepend-icon="mdi-send" :href="feedback.link" target="_blank">
                <template v-slot:prepend>
                    <v-icon color="info"></v-icon>
                </template>

                Compartilhar registro no telegram
            </v-btn>
        </v-alert>
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

<style scoped>
@media (max-device-width: 412px) {
    .v-alert .v-btn{
      font-size: 8px;
    }
    
}

</style>
